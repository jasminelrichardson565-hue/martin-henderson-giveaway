document.querySelector('.bi-list').addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector('.menu-section').style.display = 'block';
});

document.querySelector('.bi-x-lg').addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector('.menu-section').style.display = 'none';
});

function direct(select) {
    if(select === 'gallery') {
        document.querySelector('.menu-section').style.display = 'none';
        window.location.href = '#gallery';

    } else if(select === 'spin') {
        document.querySelector('.menu-section').style.display = 'none';
        window.location.href = 'spin.html';

    } else if(select === 'fan-card') {
        document.querySelector('.menu-section').style.display = 'none';
        window.location.href = 'fan-card.html';

    } else if(select === 'about') {
        document.querySelector('.menu-section').style.display = 'none';
        window.location.href = '#about'
    }
};