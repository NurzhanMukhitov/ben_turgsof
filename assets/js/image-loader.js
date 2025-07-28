// Lazy loading для изображений
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('[data-src]');
    const imageOptions = {
        root: null,
        rootMargin: '50px 0px',
        threshold: 0.1
    };

    function loadImage(image) {
        const src = image.getAttribute('data-src');
        if (!src) return;

        // Загрузка изображения
        image.src = src;
        image.removeAttribute('data-src');
        
        // Если есть WebP версия
        if (document.documentElement.classList.contains('webp')) {
            const webpSrc = src.replace(/\.(jpg|jpeg|png)$/, '.webp');
            const img = new Image();
            img.onload = function() {
                image.src = webpSrc;
            };
            img.src = webpSrc;
        }
    }

    // Intersection Observer для ленивой загрузки
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadImage(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, imageOptions);

    images.forEach(img => imageObserver.observe(img));
});

// Функция для адаптивных изображений
function setupResponsiveImages() {
    const pictures = document.querySelectorAll('picture');
    pictures.forEach(picture => {
        const img = picture.querySelector('img');
        const sources = picture.querySelectorAll('source');
        
        // Добавляем srcset для разных размеров экрана
        sources.forEach(source => {
            if (!source.srcset) {
                const src = source.getAttribute('data-srcset');
                if (src) {
                    source.srcset = src;
                    source.removeAttribute('data-srcset');
                }
            }
        });
        
        // Добавляем базовое изображение
        if (img && !img.src && img.getAttribute('data-src')) {
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src');
        }
    });
}

// Вызываем функцию после загрузки DOM
document.addEventListener('DOMContentLoaded', setupResponsiveImages); 