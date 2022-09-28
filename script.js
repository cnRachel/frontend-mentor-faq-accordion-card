let accordionButton = document.querySelector('.accordion__question');

document.querySelectorAll('.accordion__question').forEach(item => {
    item.addEventListener('click', event => {
        console.log('click!');
    });
});