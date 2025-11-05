function validateBooking() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const destination = document.getElementById("destination").value;
  
  if (!name || !email || !destination) {
    alert("Please fill all required fields!");
    return false;
  }
  alert("🎉 Booking Confirmed! We'll contact you soon.");
  return true;
}
