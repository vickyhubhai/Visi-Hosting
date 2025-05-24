# VisiHost Website - Simple Deployment Guide

## 🚀 Super Easy Setup (No Server Required!)

Your website is now completely static and can be deployed anywhere without any server setup!

### Step 1: Deploy Your Website

**Option A: Netlify (Drag & Drop)**
1. Go to [netlify.com](https://netlify.com)
2. Create a free account
3. Drag & drop your website folder
4. Your site is live instantly!

**Option B: Vercel**
1. Go to [vercel.com](https://vercel.com)
2. Connect your GitHub repo
3. Auto-deploy on every push

**Option C: GitHub Pages**
1. Push code to GitHub
2. Go to Settings → Pages
3. Enable GitHub Pages

**Option D: Any Web Host**
1. Upload files via FTP
2. Works on any hosting service

### Step 2: Test Contact Form

1. **Visit Your Live Site**
   - Go to the contact page
   - Fill out the form
   - Submit it
   - Check your Discord server for the message!

**That's it! No environment variables, no server setup, no complex configuration!**

## File Structure for Upload

Make sure you have these files in your project folder:

```
VisiHost-Website/
├── index.html
├── pricing.html
├── features.html
├── contact.html
├── guide.html
├── community.html
├── styles.css
├── script.js
├── contact-form.js
└── README.md
```

**That's it! Only 10 simple files - no complex setup needed!**

## Expected Discord Message Format

When someone submits the contact form, you'll receive a Discord message like this:

```
🎫 New Contact Form Submission

👤 Name: John Doe
📧 Email: john@example.com
📋 Subject: Technical Support
💰 Plan Interest: Pro - $0.35/month
💬 Message: I need help setting up my Discord bot...

VisiHost Contact Form • Today at 2:30 PM
```

## Troubleshooting

### Contact Form Not Working?

1. **Check Environment Variable**
   - Make sure `DISCORD_WEBHOOK_URL` is set correctly
   - Redeploy after adding the variable

2. **Check Browser Console**
   - Open Developer Tools (F12)
   - Look for any JavaScript errors
   - Check Network tab for failed requests

3. **Test Discord Webhook**
   - You can test the webhook directly using curl:
   ```bash
   curl -X POST "https://discord.com/api/webhooks/1373641959981322270/UK_sZ07biG8sI3_a85q-V8ArMLGt-5kEPCW5M_icgnSr7Ui1z8Vsxh4r5Bjg4iEarYKj" \
   -H "Content-Type: application/json" \
   -d '{"content": "Test message from VisiHost website!"}'
   ```

### Common Issues

1. **Functions Not Working**
   - Make sure `netlify/functions/` folder structure is correct
   - Check that `netlify.toml` is in the root directory

2. **CORS Errors**
   - The function includes CORS headers, but if you see errors, try redeploying

3. **Form Validation Errors**
   - Make sure all required fields are filled
   - Check email format is valid

## Custom Domain Setup (Optional)

1. **Add Custom Domain**
   - Go to Site settings → Domain management
   - Add your custom domain
   - Follow DNS configuration instructions

2. **SSL Certificate**
   - Netlify automatically provides SSL certificates
   - Your site will be available at `https://yourdomain.com`

## Support

If you encounter any issues:

1. Check the Netlify function logs in your dashboard
2. Test the Discord webhook URL directly
3. Ensure all files are uploaded correctly
4. Contact support via Discord: https://discord.gg/Vd48FAZCGV

## Success Checklist

- [ ] Website deployed to Netlify
- [ ] Environment variable `DISCORD_WEBHOOK_URL` set
- [ ] Site redeployed after adding environment variable
- [ ] Contact form tested and working
- [ ] Discord messages appearing in your server
- [ ] All pages loading correctly
- [ ] Mobile responsiveness working

Your VisiHost website is now ready to receive contact form submissions directly in Discord! 🚀
