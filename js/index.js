const input = document.querySelector(".generic-input");
const icon = document.querySelector(".custom-input-icon");

input.addEventListener("focus", () => {
  icon.style.opacity = "0";
  input.setAttribute("placeholder", ""); // Hide placeholder on focus
});

input.addEventListener("blur", () => {
  if (input.value === "") {
    icon.style.opacity = "1";
    input.setAttribute("placeholder", "Full Name"); // Restore placeholder on blur if input is empty
  }
});
