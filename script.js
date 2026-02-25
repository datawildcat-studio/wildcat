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
