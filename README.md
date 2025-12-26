# MediaCraft - Digital Marketing Agency Website

A stunning, modern website for MediaCraft digital marketing agency featuring portfolio showcases, service booking with WhatsApp integration, and premium visual design.

## 🎨 Features

- **Modern Dark Theme**: Vibrant gradients, glassmorphism effects, and smooth animations
- **Portfolio Showcase**: Live website previews using iframes
- **Voice-Over Gallery**: Video player for voice-over examples
- **Booking System**: Multi-service selection form with WhatsApp integration
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **SEO Optimized**: Proper meta tags, semantic HTML, and heading structure

## 📁 Project Structure

```
mediacraft/
├── index.html          # Main HTML structure
├── styles.css          # Complete design system and styles
├── script.js           # Interactive functionality
├── assets/             # Media files
│   ├── images/         # Image assets
│   └── videos/         # Voice-over video examples
└── README.md           # This file
```

## 🚀 Getting Started

### Option 1: Open Directly
Simply open `index.html` in your web browser.

### Option 2: Local Server (Recommended)
For better iframe loading and testing:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx -y serve .

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 📹 Adding Voice-Over Videos

To add your voice-over examples:

1. Place your video files in the `assets/videos/` folder
2. Name them:
   - `voiceover-sample-1.mp4`
   - `voiceover-sample-2.mp4`
   - `voiceover-sample-3.mp4`
3. The videos will automatically appear in the Voice-Over section

**Supported formats**: MP4, WebM, OGG

## 📱 WhatsApp Integration

The booking form sends data to WhatsApp number: **00212634864854**

When a user submits the form, it:
1. Validates all fields
2. Creates a formatted message with selected services, business category, and phone number
3. Opens WhatsApp Web/App with the pre-filled message
4. Shows a success notification

**Message Format:**
```
🎨 New Service Booking - MediaCraft

📋 Services Requested:
✓ [Selected services]

🏢 Business Category: [Category]
📞 Phone Number: [Number]

Please contact me to discuss the project details. Thank you!
```

## 🎯 Services Offered

1. **Web Design & Development**
   - Responsive Design
   - SEO Optimized
   - Fast Performance
   - Custom Solutions

2. **Social Media Content**
   - Content Strategy
   - Visual Design
   - Copywriting
   - Brand Consistency

3. **Professional Photography**
   - Product Photography
   - Brand Photography
   - Event Coverage
   - Professional Editing

4. **Voice-Over Services**
   - Multiple Languages
   - Studio Quality
   - Fast Turnaround
   - Script Consultation

## 🌐 Portfolio Websites

The portfolio section showcases three live website examples:
1. Restaurant Night Mode - https://kbm90.github.io/restaurant_night_mode/
2. Luxury Spa Experience - https://kbm90.github.io/spaexample/
3. Small Fish Club - https://kbm90.github.io/smallfishclub/

## 🎨 Design System

### Color Palette
- **Primary**: Purple to Blue gradient (#6366f1 → #3b82f6)
- **Secondary**: Orange to Pink gradient (#f97316 → #ec4899)
- **Background**: Dark theme (#0a0a0f)

### Typography
- **Headings**: Outfit (Google Fonts)
- **Body**: Inter (Google Fonts)

### Effects
- Glassmorphism cards with backdrop blur
- Smooth gradient animations
- Hover lift effects
- Scroll-triggered animations

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Customization

### Changing WhatsApp Number
Edit `script.js` line 158:
```javascript
const whatsappNumber = '00212634864854'; // Change this
```

### Adding More Business Categories
Edit `index.html` in the business category dropdown (lines 244-255).

### Modifying Services
Edit both:
1. Service cards in `index.html` (lines 77-130)
2. Checkbox options in booking form (lines 233-252)

## 🌟 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

© 2025 MediaCraft. All rights reserved.

## 📞 Contact

WhatsApp: +212 634 864 854

---

**Built with ❤️ using HTML, CSS, and JavaScript**
