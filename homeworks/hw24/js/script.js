'use strict';

const container = document.getElementById('container');

container.addEventListener('click', function(event) {
    if (!event.target.dataset.readMoreBtn) return;

    const card = event.target.closest('.card');
    const longText = card.querySelector('.long');

    if (card.classList.contains('expanded')) {
        longText.classList.add('hidden');
        event.target.textContent = 'Read more';
        card.classList.remove('expanded');
        console.log("text hided");
    } else {
        longText.classList.remove('hidden');
        event.target.textContent = 'Hide';
        card.classList.add('expanded');
        console.log("text displayed");
    }
});