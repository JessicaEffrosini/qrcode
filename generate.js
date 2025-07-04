function generateQR() {
  const input = document.getElementById("qr-input").value.trim();
  const qrDiv = document.getElementById("qrcode");

  qrDiv.innerHTML = ""; // Clear previous output

  if (!input) {
    alert("Please enter text or URL");
    return;
  }

  const encodedText = encodeURIComponent(input);
  const apiURL = `https://api.qrserver.com/v1/create-qr-code/?data=${encodedText}&size=200x200`;


  // Create QR Image
  const img = document.createElement("img");
  img.src = apiURL;
  img.alt = "QR Code";
  img.className = "img-fluid rounded border p-2";

  // Create clickable link
  const link = document.createElement("a");
  link.href = input.startsWith("http") ? input : `https://${input}`;
  link.innerText = input;
  link.target = "_blank";

  // Append to output
  qrDiv.appendChild(img);
  qrDiv.appendChild(link);
}
