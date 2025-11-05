
  const boxes = [
    document.getElementById('box1'),
    document.getElementById('box2'),
    document.getElementById('box3'),
    document.getElementById('box5'),
    document.getElementById('box6'),
    document.getElementById('box4'),
  ];

  const spinBtn = document.getElementById('spinBtn');
  const giftSection = document.querySelector('.gift-prize-section');
  const giftSpan = document.querySelector('.gift-prize-section span');
  const giftImg = document.querySelector('.gift-prize-section img');

  const SPIN_KEY = "hasSpunOnce";

  const prizeData = [
    { name: "iPhone 15", image: "img/iphone.png" },
    { name: "Smart TV", image: "img/smarttv.png" },
    { name: "MacBook Pro", image: "img/laptop.png" },
    { name: "Nike Shoe", image: "img/shoe.png" },
    { name: "Apple Watch", image: "img/watch.png" },
    { name: "Headset", image: "img/headset.png" }
  ];

  function showPrize(index) {
    giftSection.style.display = 'block';
    giftSpan.innerText = prizeData[index].name;
    giftImg.src = prizeData[index].image;
  }

  function spin() {
    if (localStorage.getItem(SPIN_KEY)) return;

    spinBtn.disabled = true;
    let current = 0;
    let totalCycles = Math.floor(Math.random() * 10) + 20;
    let speed = 100;
    let count = 0;

    const interval = setInterval(() => {
      boxes.forEach(box => box.classList.remove('active'));
      boxes[current % boxes.length].classList.add('active');
      current++;
      count++;

      if (count > totalCycles - 10) speed += 30;

      if (count >= totalCycles) {
        clearInterval(interval);
        const winnerIndex = (current - 1) % boxes.length;

        boxes.forEach((box, i) => {
          box.classList.remove('active');
          if (i === winnerIndex) box.classList.add('active');
        });

        localStorage.setItem(SPIN_KEY, winnerIndex); // Save index
        showPrize(winnerIndex);
      }
    }, speed);
  }

  // On load
  window.onload = function () {
    const saved = localStorage.getItem(SPIN_KEY);
    if (saved !== null) {
      const winnerIndex = parseInt(saved);
      spinBtn.disabled = true;
      boxes[winnerIndex].classList.add('active');
      showPrize(winnerIndex);
    }
  };


  /*  */

  document.querySelector('.claim-btn').addEventListener('click', function () {
  const saved = localStorage.getItem(SPIN_KEY);
  if (saved !== null) {
    const prize = prizeData[parseInt(saved)];

    // Save full prize info to localStorage
    localStorage.setItem("claimedPrize", JSON.stringify(prize));

    // Redirect to info.html
    window.location.href = "info.html";
  }
});
