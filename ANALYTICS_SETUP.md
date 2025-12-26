# Visitor Analytics Setup Guide

This portfolio uses Google Analytics 4 (GA4) to track visitors. The analytics are **private** - only you can see the visitor data.

## Setup Instructions

### Step 1: Create a Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Start measuring" or "Admin" → "Create Account"
4. Fill in your account details:
   - Account name: "Ali Albattah Portfolio" (or any name you prefer)
   - Click "Next"

### Step 2: Create a Property

1. Property name: "Ali Albattah Portfolio" (or your preferred name)
2. Select your timezone and currency
3. Click "Next"
4. Fill in business information (you can skip or fill basic info)
5. Click "Create"

### Step 3: Get Your Measurement ID

1. After creating the property, you'll see a "Data Streams" section
2. Click "Add stream" → "Web"
3. Enter:
   - Website URL: `https://www.alialbattah.me` (or your actual domain)
   - Stream name: "Portfolio Website"
4. Click "Create stream"
5. You'll see your **Measurement ID** (format: `G-XXXXXXXXXX`)
6. Copy this Measurement ID

### Step 4: Add Measurement ID to Your Project

1. Create a `.env.local` file in the root of your project (if it doesn't exist)
2. Add the following line:
   ```
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
   Replace `G-XXXXXXXXXX` with your actual Measurement ID

3. **Important**: Make sure `.env.local` is in your `.gitignore` file so you don't commit your Measurement ID to GitHub

### Step 5: Deploy

1. Build your project: `npm run build`
2. Deploy to GitHub Pages (or your hosting platform)
3. The analytics will start tracking visitors automatically!

## Viewing Your Analytics

1. Go to [Google Analytics](https://analytics.google.com/)
2. Select your property
3. You'll see:
   - **Real-time visitors**: Who's on your site right now
   - **User reports**: Total visitors, page views, sessions
   - **Audience insights**: Demographics, locations, devices
   - **Acquisition**: How visitors found your site
   - And much more!

## Privacy Note

- Google Analytics is GDPR compliant
- Visitor data is anonymized
- Only you (the account owner) can see the analytics
- Visitors cannot see that analytics is tracking them
- No personal information is collected

## Alternative: Privacy-Focused Analytics

If you prefer a more privacy-focused solution, you can use:
- **Plausible Analytics**: https://plausible.io/ (paid, but very privacy-focused)
- **GoatCounter**: https://www.goatcounter.com/ (free, open-source, privacy-focused)
- **Umami**: https://umami.is/ (self-hosted, free, privacy-focused)

Would you like me to set up one of these alternatives instead?

