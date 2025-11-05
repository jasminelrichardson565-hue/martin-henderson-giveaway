function purchase(selected) {
  let card;

  if (selected === 'vip') {
    card = {
      name: 'VIP MEMBERSHIP CARD',
      img: 'img/vip-card.jpeg',
      price: Number(10000).toLocaleString(),
      details: `
        <div class="about-flex">
          <div><i class="bi bi-dot"></i></div>
          <div>Access to exclusive digital content (behind-the-scenes clips, wallpapers, unreleased photos).</div>
        </div>
        <div class="about-flex"><div><i class="bi bi-dot"></i></div><div>Priority updates about events, shows, or releases.</div></div>
        <div class="about-flex"><div><i class="bi bi-dot"></i></div><div>A digital badge showing official fan status.</div></div>
        <div class="about-flex"><div><i class="bi bi-dot"></i></div><div>Discount codes for merchandise or tickets.</div></div>
        <div class="about-flex"><div><i class="bi bi-dot"></i></div><div>Access to monthly live Q&A with the celebrity.</div></div>
        <div class="about-flex"><div><i class="bi bi-dot"></i></div><div>Entry into raffles for signed memorabilia.</div></div>
        <div class="about-flex"><div><i class="bi bi-dot"></i></div><div>Early ticket access before the public.</div></div>
        <div class="about-flex"><div><i class="bi bi-dot"></i></div><div>Shoutouts on social media or in fan newsletters.</div></div>
        <div class="about-flex"><div><i class="bi bi-dot"></i></div><div>Access to private fan club events (virtual meetups or watch parties).</div></div>
        <div class="about-flex"><div><i class="bi bi-dot"></i></div><div>Special digital collectibles/NFTs (if you want a Web3 angle).</div></div>
        <div class="about-flex"><div><i class="bi bi-dot"></i></div><div>Exclusive meet & greet (virtual or in-person depending on logistics).</div></div>
        <div class="about-flex"><div><i class="bi bi-dot"></i></div><div>Backstage pass opportunities</div></div>
        <div class="about-flex"><div><i class="bi bi-dot"></i></div><div>Personalized message (video/audio shoutout).</div></div>
        <div class="about-flex"><div><i class="bi bi-dot"></i></div><div>Invitation to celebrity-curated experiences (e.g., private dinner, studio tour, training session depending on the celeb).</div></div>
      `
    };
  } else if (selected === 'Plantinum') {
    card = {
      name: 'PLATINUM MEMBERSHIP CARD',
      img: 'img/platinum-card.jpeg',
      price: Number(8000).toLocaleString(),
      details: `
        <div class="about-flex"><div><i class="bi bi-dot"></i></div><div>Access to exclusive digital content (behind-the-scenes clips, wallpapers, unreleased photos).</div></div>
        <div class="about-flex"><div><i class="bi bi-dot"></i></div><div>Priority updates about events, shows, or releases.</div></div>
        <div class="about-flex"><div><i class="bi bi-dot"></i></div><div>A digital badge showing official fan status.</div></div>
        <div class="about-flex"><div><i class="bi bi-dot"></i></div><div>Discount codes for merchandise or tickets.</div></div>
        <div class="about-flex"><div><i class="bi bi-dot"></i></div><div>Access to monthly live Q&A with the celebrity.</div></div>
        <div class="about-flex"><div><i class="bi bi-dot"></i></div><div>Entry into raffles for signed memorabilia.</div></div>
        <div class="about-flex"><div><i class="bi bi-dot"></i></div><div>Early ticket access before the public.</div></div>
        <div class="about-flex"><div><i class="bi bi-dot"></i></div><div>Shoutouts on social media or in fan newsletters.</div></div>
        <div class="about-flex"><div><i class="bi bi-dot"></i></div><div>Access to private fan club events (virtual meetups or watch parties).</div></div>
        <div class="about-flex"><div><i class="bi bi-dot"></i></div><div>Special digital collectibles/NFTs (if you want a Web3 angle).</div></div>
      `
    };
  } else if (selected === 'gold') {
    card = {
      name: 'GOLD MEMBERSHIP CARD',
      img: 'img/gold-card.jpeg',
      price: Number(5000).toLocaleString(),
      details: `
        <div class="about-flex"><div><i class="bi bi-dot"></i></div><div>Access to exclusive digital content (behind-the-scenes clips, wallpapers, unreleased photos).</div></div>
        <div class="about-flex"><div><i class="bi bi-dot"></i></div><div>Priority updates about events, shows, or releases.</div></div>
        <div class="about-flex"><div><i class="bi bi-dot"></i></div><div>A digital badge showing official fan status.</div></div>
        <div class="about-flex"><div><i class="bi bi-dot"></i></div><div>Discount codes for merchandise or tickets.</div></div>
        <div class="about-flex"><div><i class="bi bi-dot"></i></div><div>Access to monthly live Q&A with the celebrity.</div></div>
        <div class="about-flex"><div><i class="bi bi-dot"></i></div><div>Entry into raffles for signed memorabilia.</div></div>
      `
    };
  } else if (selected === 'regular') {
    card = {
      name: 'REGULAR MEMBERSHIP CARD',
      img: 'img/regular-card.jpeg',
      price: Number(1500).toLocaleString(),
      details: `
        <div class="about-flex"><div><i class="bi bi-dot"></i></div><div>Access to exclusive digital content (behind-the-scenes clips, wallpapers, unreleased photos).</div></div>
        <div class="about-flex"><div><i class="bi bi-dot"></i></div><div>Priority updates about events, shows, or releases.</div></div>
        <div class="about-flex"><div><i class="bi bi-dot"></i></div><div>A digital badge showing official fan status.</div></div>
      `
    };
  }

  localStorage.setItem('card', JSON.stringify(card));

  document.querySelector('.loading').style.display = 'block';
  setTimeout(() => {
    document.querySelector('.loading').style.display = 'none';
    window.location.href = 'details.html';
  }, 3000);
}
