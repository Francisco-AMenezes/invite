function sendMessage() {
  const name = document.getElementById("nome").value;
  const phoneNumber = "+5521920016386";
  const message = `Oi. Eu, ${name}, confirmo a minha presença`;
  const link =
    "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

  window.open(link, "_blank");
}
