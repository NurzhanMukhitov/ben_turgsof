const fs = require('fs');
const path = require('path');
const categoryData = require('./simple-data.js');

// Путь к директории с детальными страницами
const engineeringDir = path.join(__dirname, '..', 'engineering');

// Создаем директорию, если она не существует
if (!fs.existsSync(engineeringDir)) {
    fs.mkdirSync(engineeringDir, { recursive: true });
}

// Функция для создания URL-friendly имени файла
function createSlug(title) {
    return title.toLowerCase()
               .replace(/&/g, 'and')
               .replace(/[^a-z0-9]+/g, '_')
               .replace(/^_+|_+$/g, '');
}

// Шаблон для детальной страницы
function generatePageHTML(category) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${category.title} - ${category.subtitle} - ALSURO">
    <title>${category.title} - ALSURO</title>
    <link rel="preload" href="../assets/fonts/Montserrat-Bold.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="../assets/fonts/OpenSans-Regular.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="stylesheet" href="../assets/css/style.css">
    <link rel="stylesheet" href="../assets/css/responsive.css">
    <link rel="stylesheet" href="../assets/css/engineering.css">
    <link rel="stylesheet" href="../assets/css/engineering-detail.css">
</head>
<body>
    <!-- Skip to content link for accessibility -->
    <a href="#main-content" class="sr-only">Skip to main content</a>

    <!-- Header -->
    <header class="header" role="banner">
        <div class="container">
            <a href="../index.html" class="logo" aria-label="ALSURO home">
                <span class="logo-text">ALSURO</span>
            </a>
            <nav class="main-menu" role="navigation" aria-label="Main navigation">
                <ul>
                    <li><a href="../index.html">HOME</a></li>
                    <li><a href="../about.html">ABOUT US</a></li>
                    <li><a href="../engineering.html" class="active" aria-current="page">ENGINEERING</a></li>
                    <li><a href="../trade.html">TRADING</a></li>
                    <li><a href="../contact.html">CONTACT</a></li>
                </ul>
            </nav>
            <button class="mobile-menu-toggle" aria-expanded="false" aria-controls="main-menu" aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </header>

    <!-- Menu Overlay -->
    <div class="menu-overlay"></div>

    <!-- Main Content -->
    <main id="main-content" class="engineering-detail">
        <!-- Hero Section -->
        <section class="detail-hero" style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('../${category.imageHero}');">
            <div class="container">
                <h1>${category.title}</h1>
                <p class="hero-subtitle">${category.subtitle}</p>
            </div>
        </section>

        <!-- Detail Content -->
        <section class="detail-content">
            <div class="container">
                <div class="content-grid">
                    <div class="content-main">
                        <div class="overview-section">
                            <h2>Overview</h2>
                            <p>${category.content.overview}</p>
                        </div>
                        
                        <div class="featured-image">
                            <picture>
                                <source srcset="../${category.imageLarge.replace('.jpg', '.webp')}" type="image/webp">
                                <img src="../${category.imageLarge}" alt="${category.title}" loading="lazy">
                            </picture>
                        </div>
                        
                        <div class="approach-section">
                            <h2>Our Approach</h2>
                            <ul>
                                ${category.content.approach.map(item => `<li>${item}</li>`).join('\n                                ')}
                            </ul>
                        </div>
                        
                        <div class="technologies-section">
                            <h2>Technologies</h2>
                            <ul>
                                ${category.content.technologies.map(item => `<li>${item}</li>`).join('\n                                ')}
                            </ul>
                        </div>
                        
                        <div class="benefits-section">
                            <h2>Benefits</h2>
                            <ul>
                                ${category.content.benefits.map(item => `<li>${item}</li>`).join('\n                                ')}
                            </ul>
                        </div>
                    </div>
                    
                    <div class="content-sidebar">
                        <div class="sidebar-widget">
                            <h3>Other Categories</h3>
                            <ul>
                                ${categoryData
                                    .filter(cat => cat.id !== category.id)
                                    .slice(0, 5)
                                    .map(cat => `<li><a href="${createSlug(cat.title)}.html">${cat.title}</a></li>`)
                                    .join('\n                                ')}
                                <li><a href="../engineering.html">View All Categories</a></li>
                            </ul>
                        </div>
                        
                        <div class="contact-widget">
                            <h3>Get in Touch</h3>
                            <p>Interested in our ${category.title} solutions? Contact our team for more information.</p>
                            <a href="../contact.html" class="btn btn-primary">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="footer" role="contentinfo">
        <div class="container">
            <div class="footer-top">
                <div class="footer-contact">
                    <div class="footer-contact-item">
                        <span class="icon location-icon" aria-hidden="true">&#x1F4CD;</span>
                        <a href="https://g.co/kgs/BFZ6YtK" target="_blank" rel="noopener" aria-label="Our address: 08007, España, Barcelona, Carrer d'Aragó, 264, 5-3">08007, España, Barcelona, Carrer d'Aragó, 264, 5-3</a>
                    </div>
                    <div class="footer-contact-item">
                        <span class="icon phone-icon" aria-hidden="true">&#x1F4DE;</span>
                        <a href="tel:+34936949999" class="phone" aria-label="Call us at: +34 936 949 999">+34 936 949 999</a>
                    </div>
                    <div class="footer-contact-item">
                        <span class="icon email-icon" aria-hidden="true">&#x2709;</span>
                        <a href="mailto:info@alsuro.com" class="email" aria-label="Email us at: info@alsuro.com">info@alsuro.com</a>
                    </div>
                </div>
                <div class="footer-links">
                    <a href="#" aria-label="Cookies and Privacy Policy">Cookies & Privacy</a>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; <span id="current-year"></span> ALSURO - All rights reserved</p>
            </div>
        </div>
    </footer>

    <!-- Scripts -->
    <script src="../assets/js/main.js"></script>
    <script>
        // Установка текущего года в футере
        document.getElementById('current-year').textContent = new Date().getFullYear();
    </script>
</body>
</html>`;
}

// Генерируем страницы для каждой категории
categoryData.forEach(category => {
    const fileName = `${createSlug(category.title)}.html`;
    const filePath = path.join(engineeringDir, fileName);
    const htmlContent = generatePageHTML(category);
    
    fs.writeFileSync(filePath, htmlContent);
    console.log(`Generated page for ${category.title} at ${filePath}`);
});

console.log('All pages have been generated successfully!'); 