document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('requestModal');
    const openBtn = document.getElementById('openModal');
    const closeBtn = document.querySelector('.close-modal');

    // Открыть модальное окно
    openBtn.onclick = () => {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Запрет прокрутки фона
    }

    // Закрыть при нажатии на крестик
    closeBtn.onclick = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Закрыть при нажатии вне окна
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    // Обработка формы (заглушка)
    const form = document.getElementById('contactForm');
    form.onsubmit = (e) => {
        e.preventDefault();
        alert('Thank you! Your request has been sent.');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        form.reset();
    }
});