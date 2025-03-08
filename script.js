document.addEventListener('DOMContentLoaded', function() {
    const showMoreButton = document.getElementById('showMoreButton');
    const hiddenItems = document.querySelectorAll('.grid-items-hidden');

    showMoreButton.addEventListener('click', function() {
        hiddenItems.forEach(item => {
            item.classList.remove('grid-items-hidden');
            item.classList.add('grid-items')
        });
         showMoreButton.style.display = 'none';
    });
});