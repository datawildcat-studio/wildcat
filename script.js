document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('requestModal');
    const closeBtn = document.querySelector('.close-modal');
    
    // Находим ВСЕ кнопки с классом openModalBtn
    const openBtns = document.querySelectorAll('.openModalBtn');

    openBtns.forEach(btn => {
        btn.onclick = () => {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });

    closeBtn.onclick = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    // Обработка формы
    const form = document.getElementById('contactForm');
    if(form) {
        form.onsubmit = (e) => {
            e.preventDefault();
            alert('Thank you! Your request has been sent.');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            form.reset();
        }
    }
});

// Функция для анимации появления элементов
const revealOnScroll = () => {
    const reveals = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(reveal => observer.observe(reveal));
};

// Запускаем функцию после загрузки документа
document.addEventListener('DOMContentLoaded', () => {
    revealOnScroll();
    
    // ... ваш предыдущий код для модального окна ...
});
