# PT Surya Citra Kencana - React Website

Modern, responsive website untuk PT Surya Citra Kencana dibangun dengan React 19, Vite 7, dan TailwindCSS v4.

## 🚀 Teknologi

- **React 19** - Latest React version with improved performance
- **Vite 7** - Lightning-fast build tool and dev server
- **TailwindCSS v4** - Latest utility-first CSS framework with CSS-first configuration
- **@tailwindcss/vite** - Official Tailwind Vite plugin (no PostCSS needed!)

## 📁 Struktur Project

```
react-app/
├── public/
│   ├── images/         # Semua gambar/foto
│   ├── css/           # CSS files dari template asli
│   └── js/            # JavaScript files dari template asli
├── src/
│   ├── components/    # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Products.jsx
│   │   ├── Features.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Gallery.jsx
│   │   ├── Blog.jsx
│   │   ├── Footer.jsx
│   │   └── WhatsAppFloat.jsx
│   ├── App.jsx        # Main application component
│   ├── main.jsx       # Entry point
│   └── index.css      # Global styles dengan Tailwind
├── index.html         # HTML template
├── tailwind.config.js # Tailwind configuration
└── package.json       # Dependencies
```

## 🛠️ Installation & Setup

### 1. Install Dependencies
```bash
cd react-app
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Website akan berjalan di `http://localhost:5173`

### 3. Build for Production
```bash
npm run build
```
Build files akan ada di folder `dist/`

### 4. Preview Production Build
```bash
npm run preview
```

## 🎨 Customization

### Tailwind v4 Configuration ✨ NEW!

**Important:** TailwindCSS v4 menggunakan CSS-first configuration, bukan `tailwind.config.js`!

### Warna Brand
Warna brand dikonfigurasi di `src/index.css` menggunakan `@theme` directive:

```css
@theme {
  --color-primary: #1f438d;          /* Biru tua */
  --color-primary-light: #f3c100;    /* Kuning */
  --color-secondary: #fdaa4b;        /* Orange */
  --color-secondary-dark: #fb923c;   /* Orange gelap */
}
```

**Cara Menggunakan:**
- Gunakan utility classes seperti: `bg-primary`, `text-primary`, `border-primary-light`, dll.
- Gradients: `bg-gradient-to-r from-primary to-primary-light`
- Hover states: `hover:bg-secondary`, `hover:text-primary-light`

**Untuk mengubah warna:** Edit variabel `--color-*` di dalam `@theme` block di file `src/index.css`.

### Menambah/Edit Komponen
Semua komponen ada di folder `src/components/`. Setiap komponen adalah file JSX terpisah yang bisa di-edit secara independen.

### Menambah Produk
Edit file `src/components/Products.jsx` dan tambahkan object produk baru ke array `products`.

### Menambah Testimoni
Edit file `src/components/Testimonials.jsx` dan tambahkan object testimoni baru ke array `testimonials`.

## 📱 Features

- ✅ Fully Responsive Design
- ✅ Modern UI/UX dengan Tailwind CSS
- ✅ Fast Loading dengan Vite
- ✅ SEO Optimized
- ✅ WhatsApp Floating Button
- ✅ Smooth Scrolling Navigation
- ✅ Mobile Menu
- ✅ Optimized Images

## 🌐 Deployment

### Vercel (Recommended)
1. Push code ke GitHub
2. Import project di Vercel
3. Deploy otomatis

### Netlify
1. Drag & drop folder `dist/` ke Netlify
2. Atau connect dengan GitHub untuk auto-deploy

### Manual Hosting
1. Run `npm run build`
2. Upload folder `dist/` ke hosting Anda
3. Configure web server untuk SPA

## 📞 Contact Information

Website ini dibangun untuk:
**PT Surya Citra Kencana**
- Phone: +62 882-9302-4031
- Location: Jakarta Barat

## 📄 License

© 2024 PT Surya Citra Kencana. All rights reserved.
