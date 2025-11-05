function sendMessage() {
  const name = document.getElementById("cname").value.trim();
  const email = document.getElementById("cemail").value.trim();
  const message = document.getElementById("cmessage").value.trim();

  if (!name || !email || !message) {
    alert("Please fill all fields!");
    return false;
  }

  alert("📩 Thank you, " + name + "! Your message has been sent successfully.");
  return true;
}
