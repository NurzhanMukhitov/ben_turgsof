document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Проверка reCAPTCHA
        const recaptchaResponse = grecaptcha.getResponse();
        if (!recaptchaResponse) {
            alert('Please complete the reCAPTCHA verification');
            return;
        }
        
        // Собираем данные формы
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        try {
            // Здесь будет отправка данных на сервер
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            
            if (response.ok) {
                alert('Thank you for your message! We will contact you soon.');
                form.reset();
                grecaptcha.reset();
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Sorry, there was an error sending your message. Please try again later.');
        }
    });
    
    // Анимация меток полей формы
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        // Добавляем placeholder для работы анимации
        input.setAttribute('placeholder', ' ');
        
        // Обработка начального состояния
        if (input.value) {
            input.classList.add('has-value');
        }
        
        // Обработка изменений
        input.addEventListener('input', function() {
            if (this.value) {
                this.classList.add('has-value');
            } else {
                this.classList.remove('has-value');
            }
        });
    });
}); 