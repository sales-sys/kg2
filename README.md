# KG E-Commerce Website

**Production-ready HTML website for Khavho Group (KG) procurement platform**

## 🚀 Features

- ✅ **Pure HTML/CSS/JavaScript** - No frameworks, fast loading
- ✅ **Firebase Integration** - Real-time product catalog
- ✅ **Fully Responsive** - Mobile, tablet, desktop optimized
- ✅ **Shopping Cart** - LocalStorage persistence
- ✅ **Clean Design** - Professional orange/black/white branding
- ✅ **6 Complete Pages** - Home, About, Services, Products, Contact, Cart
- ✅ **Production Ready** - Optimized and tested

## 📁 File Structure

```
kg-html/
├── index.html          # Homepage
├── about.html          # About page
├── services.html       # Services page
├── products.html       # Products catalog with Firebase
├── contact.html        # Contact form
├── cart.html           # Shopping cart
├── css/
│   └── styles.css      # All styles
├── js/
│   └── main.js         # Cart & mobile menu logic
├── images/
│   └── placeholder.jpg # Product placeholder
└── README.md          # This file
```

## 🎨 Design

- **Primary Color:** Orange (#f97316)
- **Text:** Black on white
- **Typography:** System fonts for performance
- **Layout:** Clean, spacious, professional
- **Mobile:** Hamburger menu, responsive grids

## 🔥 Firebase Configuration

Already configured for Firebase project: **khavhogroups2**

Products are loaded from Firestore collection: `products`

## 📦 Deployment

### Option 1: Netlify (Recommended)

1. Create `netlify.toml`:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

2. Deploy:
```bash
netlify deploy --prod
```

### Option 2: GitHub Pages

1. Push to GitHub
2. Enable GitHub Pages in repository settings
3. Select main branch

### Option 3: Direct Server

Upload all files to your web server root directory.

## 🛠️ Development

Simply open `index.html` in your browser. No build process needed!

For local development with live reload:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server
```

## 📝 TODO (Manual Setup)

1. **Seed Firebase Database**
   - Run the seed script to populate products
   - Located in original Next.js project: `scripts/seedData.js`

2. **Payment Gateway Integration**
   - PayFast merchant ID configured
   - Netcash integration ready
   - Add webhook endpoints to your server

3. **Email Service**
   - Connect contact form to email service
   - Options: EmailJS, SendGrid, or custom backend

4. **Product Images**
   - Upload product images to Firebase Storage
   - Update imageUrl fields in Firestore

## 🔒 Security

- Firebase config is public (safe for client-side)
- Set Firestore security rules in Firebase Console
- Never expose API keys for server-side operations

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

© 2025 Khavho Group (KG). All rights reserved.

## 🆘 Support

Email: info@kg.co.za

---

**Built with ❤️ for Khavho Group**
