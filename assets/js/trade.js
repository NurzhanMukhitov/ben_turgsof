document.addEventListener('DOMContentLoaded', function() {
    // Улучшение доступности карточек
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        // Добавляем роль кнопки для карточек без ссылок
        if (!card.querySelector('a')) {
            card.setAttribute('role', 'button');
            card.setAttribute('tabindex', '0');
        }
        
        // Добавляем обработчик клавиатуры
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const link = this.querySelector('a');
                if (link) {
                    link.click();
                } else {
                    this.click();
                }
            }
        });
        
        // Добавляем анимацию при фокусе
        card.addEventListener('focus', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('blur', function() {
            this.style.transform = '';
        });
    });
    
    // Улучшение навигации с клавиатуры
    const focusableElements = document.querySelectorAll('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    });
    
    // Добавляем индикатор загрузки изображений
    const images = document.querySelectorAll('.card img');
    
    images.forEach(img => {
        // Создаем оверлей загрузки
        const loadingOverlay = document.createElement('div');
        loadingOverlay.className = 'loading-overlay';
        loadingOverlay.innerHTML = '<span class="loading-spinner"></span>';
        img.parentNode.appendChild(loadingOverlay);
        
        // Обработка загрузки изображения
        if (img.complete) {
            loadingOverlay.remove();
        } else {
            img.addEventListener('load', () => {
                loadingOverlay.remove();
            });
            
            img.addEventListener('error', () => {
                loadingOverlay.innerHTML = '<span class="error-message">Failed to load image</span>';
            });
        }
    });
    
    // Добавляем плавную прокрутку для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Устанавливаем фокус после прокрутки
                target.setAttribute('tabindex', '-1');
                target.focus();
            }
        });
    });
    
    // Обработка изменения темы
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    function updateTheme(e) {
        document.body.classList.toggle('dark-theme', e.matches);
    }
    
    prefersDarkScheme.addListener(updateTheme);
    updateTheme(prefersDarkScheme);
}); 