const card = JSON.parse(localStorage.getItem('card')) || {};

const nameElements = document.querySelectorAll('#name');
nameElements.forEach(element => {
  element.innerHTML = card.name || '';
});
const purchase = document.querySelector('#purchase-btn');
document.querySelector('#details').innerHTML = card.details || '';
purchase.innerHTML = `Purchase $${card.price}.00` || '';
document.querySelector('#details-img').src = card.img || '';

purchase.addEventListener('click', function(e) {
  e.preventDefault();

  document.querySelector('.loading').style.display = 'block';
  setTimeout(() => {
    document.querySelector('.loading').style.display = 'none';
    window.location.href = 'payment.html';
  },5000)
})
