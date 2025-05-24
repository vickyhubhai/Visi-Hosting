// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);
            const data = {
                firstName: formData.get('firstName'),
                lastName: formData.get('lastName'),
                email: formData.get('email'),
                subject: formData.get('subject'),
                planInterest: formData.get('planInterest'),
                message: formData.get('message')
            };

            // Validate required fields
            if (!data.firstName || !data.lastName || !data.email || !data.subject || !data.message) {
                showMessage('Please fill in all required fields.', 'error');
                return;
            }

            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }

            // Show loading state
            setLoadingState(true);

            try {
                // Discord webhook URL
                const webhookUrl = 'https://discord.com/api/webhooks/1373641959981322270/UK_sZ07biG8sI3_a85q-V8ArMLGt-5kEPCW5M_icgnSr7Ui1z8Vsxh4r5Bjg4iEarYKj';

                // Create Discord embed
                const embed = {
                    title: "🎫 New Contact Form Submission",
                    color: 0x5865F2, // Discord blurple color
                    fields: [
                        {
                            name: "👤 Name",
                            value: `${data.firstName} ${data.lastName}`,
                            inline: true
                        },
                        {
                            name: "📧 Email",
                            value: data.email,
                            inline: true
                        },
                        {
                            name: "📋 Subject",
                            value: data.subject,
                            inline: true
                        }
                    ],
                    timestamp: new Date().toISOString(),
                    footer: {
                        text: "VisiHost Contact Form"
                    }
                };

                // Add plan interest if provided
                if (data.planInterest) {
                    embed.fields.push({
                        name: "💰 Plan Interest",
                        value: data.planInterest,
                        inline: true
                    });
                }

                // Add message
                embed.fields.push({
                    name: "💬 Message",
                    value: data.message.length > 1024 ? data.message.substring(0, 1021) + "..." : data.message,
                    inline: false
                });

                // Send directly to Discord webhook
                const response = await fetch(webhookUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        embeds: [embed]
                    })
                });

                if (response.ok) {
                    showMessage('Message sent successfully! We\'ll get back to you soon.', 'success');
                    contactForm.reset();
                } else {
                    console.error('Discord webhook failed:', response.status, response.statusText);
                    showMessage('Failed to send message. Please try again later.', 'error');
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                showMessage('Network error. Please check your connection and try again.', 'error');
            } finally {
                setLoadingState(false);
            }
        });
    }

    function setLoadingState(loading) {
        const btnText = submitBtn.querySelector('.btn-text');
        const btnIcon = submitBtn.querySelector('i');

        if (loading) {
            submitBtn.disabled = true;
            btnText.textContent = 'Sending...';
            btnIcon.className = 'fas fa-spinner fa-spin';
            submitBtn.style.opacity = '0.7';
        } else {
            submitBtn.disabled = false;
            btnText.textContent = 'Send Message';
            btnIcon.className = 'fas fa-paper-plane';
            submitBtn.style.opacity = '1';
        }
    }

    function showMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';

        // Auto-hide success messages after 5 seconds
        if (type === 'success') {
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }

        // Scroll to message
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
});
