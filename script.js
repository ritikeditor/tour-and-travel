// Simple alert on button click
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      alert("Redirecting to packages page...");
    });
  });
});
