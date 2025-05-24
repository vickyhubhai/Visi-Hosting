// Documentation JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initDocumentation();
});

function initDocumentation() {
    initDocNavigation();
    initSearchFunctionality();
    initCodeCopyButtons();
    initTableOfContents();
}

// Documentation navigation
function initDocNavigation() {
    const navLinks = document.querySelectorAll('.docs-nav-link');
    const sections = document.querySelectorAll('.docs-section');

    // Smooth scrolling for doc navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Update active nav link
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY + 150;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.docs-nav-link[href="#${sectionId}"]`);
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    });
}

// Search functionality
function initSearchFunctionality() {
    const searchInput = document.querySelector('.search-input');
    const sections = document.querySelectorAll('.docs-section');
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            
            if (query.length === 0) {
                // Show all sections
                sections.forEach(section => {
                    section.style.display = 'block';
                });
                return;
            }
            
            sections.forEach(section => {
                const content = section.textContent.toLowerCase();
                if (content.includes(query)) {
                    section.style.display = 'block';
                    highlightSearchTerms(section, query);
                } else {
                    section.style.display = 'none';
                }
            });
        });
    }
}

// Highlight search terms
function highlightSearchTerms(section, query) {
    // Simple highlighting - in a real implementation, you'd want more sophisticated highlighting
    const textNodes = getTextNodes(section);
    textNodes.forEach(node => {
        if (node.textContent.toLowerCase().includes(query)) {
            const parent = node.parentNode;
            const wrapper = document.createElement('span');
            wrapper.innerHTML = node.textContent.replace(
                new RegExp(query, 'gi'),
                `<mark style="background: rgba(99, 102, 241, 0.3); color: inherit;">$&</mark>`
            );
            parent.replaceChild(wrapper, node);
        }
    });
}

// Get all text nodes
function getTextNodes(element) {
    const textNodes = [];
    const walker = document.createTreeWalker(
        element,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );
    
    let node;
    while (node = walker.nextNode()) {
        if (node.textContent.trim()) {
            textNodes.push(node);
        }
    }
    
    return textNodes;
}

// Code copy functionality
function initCodeCopyButtons() {
    const copyButtons = document.querySelectorAll('.code-copy');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const codeBlock = button.closest('.docs-code-block');
            const code = codeBlock.querySelector('code');
            
            if (code) {
                copyToClipboard(code.textContent);
                showCopyFeedback(button);
            }
        });
    });
}

// Copy to clipboard
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            console.log('Code copied to clipboard');
        }).catch(err => {
            console.error('Failed to copy code: ', err);
            fallbackCopyToClipboard(text);
        });
    } else {
        fallbackCopyToClipboard(text);
    }
}

// Fallback copy method
function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        console.log('Code copied to clipboard (fallback)');
    } catch (err) {
        console.error('Fallback copy failed: ', err);
    }
    
    document.body.removeChild(textArea);
}

// Show copy feedback
function showCopyFeedback(button) {
    const originalIcon = button.innerHTML;
    button.innerHTML = '<i class="fas fa-check"></i>';
    button.style.color = '#10b981';
    
    setTimeout(() => {
        button.innerHTML = originalIcon;
        button.style.color = '';
    }, 2000);
}

// Table of contents functionality
function initTableOfContents() {
    const tocLinks = document.querySelectorAll('.toc-link');
    const sections = document.querySelectorAll('.docs-section');
    
    // Smooth scrolling for TOC
    tocLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update active TOC link on scroll
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY + 150;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const tocLink = document.querySelector(`.toc-link[href="#${sectionId}"]`);
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                tocLinks.forEach(link => link.classList.remove('active'));
                if (tocLink) tocLink.classList.add('active');
            }
        });
    });
}

// Global copy code function for inline use
function copyCode(button) {
    const codeBlock = button.closest('.docs-code-block');
    const code = codeBlock.querySelector('code');
    
    if (code) {
        copyToClipboard(code.textContent);
        showCopyFeedback(button);
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            searchInput.focus();
        }
    }
    
    // Escape to clear search
    if (e.key === 'Escape') {
        const searchInput = document.querySelector('.search-input');
        if (searchInput && document.activeElement === searchInput) {
            searchInput.value = '';
            searchInput.dispatchEvent(new Event('input'));
            searchInput.blur();
        }
    }
});

// Add search keyboard shortcut hint
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
        const shortcut = isMac ? '⌘K' : 'Ctrl+K';
        searchInput.placeholder = `Search documentation... (${shortcut})`;
    }
});

// Smooth reveal animation for sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe documentation sections
document.addEventListener('DOMContentLoaded', () => {
    const docSections = document.querySelectorAll('.docs-section');
    docSections.forEach(section => {
        section.classList.add('animate-on-scroll');
        sectionObserver.observe(section);
    });
});

// Add CSS for section animations
const docStyle = document.createElement('style');
docStyle.textContent = `
    .docs-section.animate-on-scroll {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s ease;
    }

    .docs-section.animate-on-scroll.animate-in {
        opacity: 1;
        transform: translateY(0);
    }

    .toc-link.active {
        color: #6366f1 !important;
        background: rgba(99, 102, 241, 0.1) !important;
    }

    .search-input::placeholder {
        color: var(--text-muted);
    }

    mark {
        background: rgba(99, 102, 241, 0.3) !important;
        color: inherit !important;
        padding: 0 2px;
        border-radius: 2px;
    }
`;

document.head.appendChild(docStyle);
