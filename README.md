# VisiHost Website

A modern, responsive website for VisiHost Discord bot hosting service.

## Features

- ✅ Modern futuristic UI design
- ✅ Responsive design for all devices
- ✅ Direct Discord webhook integration (no server required!)
- ✅ Static hosting ready (Netlify, Vercel, GitHub Pages, etc.)
- ✅ Community guidelines and resources
- ✅ Pricing plans with Discord integration

## Setup Instructions

### 1. Deploy Anywhere (No Server Required!)

This website is completely static and can be deployed to any hosting service:

**Popular Options:**
- **Netlify**: Drag & drop your files
- **Vercel**: Connect your GitHub repo
- **GitHub Pages**: Push to GitHub and enable Pages
- **Any Web Host**: Upload files via FTP

### 2. Discord Webhook (Already Configured!)

The Discord webhook is already configured in the code:
- ✅ Webhook URL is embedded in `contact-form.js`
- ✅ No environment variables needed
- ✅ No server-side code required
- ✅ Works immediately after deployment

### 3. Deploy

Simply upload all files to your hosting service. The contact form will automatically send submissions to your Discord server!

## File Structure

```
├── index.html              # Homepage
├── pricing.html           # Pricing page
├── features.html          # Features page
├── contact.html           # Contact page with Discord webhook
├── guide.html             # Getting started guide
├── community.html         # Community page
├── styles.css             # Main stylesheet
├── script.js              # Main JavaScript
├── contact-form.js        # Contact form handler (with Discord webhook)
└── README.md              # This file
```

## Contact Form Features

- ✅ Real-time form validation
- ✅ Loading states and user feedback
- ✅ Direct Discord webhook integration (no server needed!)
- ✅ Error handling
- ✅ Success/error messages
- ✅ Responsive design
- ✅ Beautiful Discord embeds

## Discord Integration

The website includes multiple Discord integration points:

1. **Contact Form**: Sends form submissions directly to Discord via webhook
2. **Get Started Buttons**: Direct users to Discord server
3. **Community Resources**: Links to Discord for support
4. **Footer Social Links**: Discord server access

## How It Works

The contact form sends data directly from the browser to your Discord webhook:
1. User fills out the form
2. JavaScript validates the data
3. Creates a beautiful Discord embed
4. Sends directly to Discord webhook
5. Shows success/error message

**No server, no environment variables, no complex setup!**

## Deployment Options

### Option 1: Netlify (Recommended)
1. Go to [netlify.com](https://netlify.com)
2. Drag & drop your website folder
3. Your site is live instantly!

### Option 2: Vercel
1. Go to [vercel.com](https://vercel.com)
2. Connect your GitHub repo
3. Auto-deploy on every push

### Option 3: GitHub Pages
1. Push code to GitHub
2. Go to Settings → Pages
3. Enable GitHub Pages

### Option 4: Any Web Host
1. Upload files via FTP
2. Works on any hosting service

## Customization

### Change Discord Webhook
Edit line 40 in `contact-form.js`:
```javascript
const webhookUrl = 'YOUR_NEW_WEBHOOK_URL_HERE';
```

### Update Discord Server Link
Replace `https://discord.gg/Vd48FAZCGV` throughout HTML files with your server invite.

### Modify Styling
Edit CSS variables in `styles.css` for colors and design.

## Support

For support with this website, join our Discord server: https://discord.gg/Vd48FAZCGV
