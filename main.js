
document.querySelectorAll('.ulWow a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('burger-toggle').checked = false; // Закрываем бургер-меню
    });
});