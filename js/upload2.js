const fileInput = document.getElementById('fileInput');
const preview = document.getElementById('preview');
let selectedFile = null;

fileInput.addEventListener('change', function() {
  const file = this.files[0];
  if (file) {
    selectedFile = file;

    const reader = new FileReader();
    reader.onload = function(e) {
      preview.src = e.target.result;
      preview.style.display = "block";
    }
    reader.readAsDataURL(file);

    const imgContainer = document.querySelector('.image-container');
    if (imgContainer) imgContainer.style.display = 'block';
  }
});


document.getElementById("paymentForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  if (!selectedFile) {
    alert("Please upload an image first.");
    return;
  }

  const userName = document.getElementById("userName").value.trim();
  const userEmail = document.getElementById("userEmail").value.trim();

  if (!userName || !userEmail) {
    alert("Please enter both name and email.");
    return;
  }

  const url = `https://api.telegram.org/bot${token}/sendPhoto`;

  const captionText = `🧾 Payment Receipt\n\n👤 Name: ${userName}\n📧 Email: ${userEmail}`;

  const formData = new FormData();
  formData.append("chat_id", chat_id);
  formData.append("photo", selectedFile);
  formData.append("caption", captionText);

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData
    });

    const result = await response.text();
    console.log(result);

    if (response.ok) {
      Swal.fire("Success", "Payment Receipt Successfully uploaded please wait for reveiw", "success").then(() => {
        window.location.href='index.html';
      });
     
      document.getElementById("paymentForm").reset();
      preview.style.display = "none";
      selectedFile = null;
    } else {
      Swal.fire("Error", "❌ Failed to send screenshot receipt.", "error");
    }
  } catch (err) {
    console.error(err);
    Swal.fire("Error", "⚠️ Error sending.", "error");
  }
});



