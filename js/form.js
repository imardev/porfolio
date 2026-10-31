// Variables
const form = document.getElementById("form");
const name = document.querySelector(".input-name");
const email = document.querySelector(".input-email");
const messageName = document.getElementById("messageName");
const messageEmail = document.getElementById("messageEmail");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// Codigo Principal

form.addEventListener("submit", function (e) {
  const emailValue = email.value.trim();
  const nameValue = name.value.trim();
  let valid = true;

  messageName.textContent = "";
  messageEmail.textContent = "";

  if (nameValue.length < 2 || nameValue.length > 100) {
    messageName.textContent = "El nombre debe tener entre 2 y 100 caracteres";
    messageName.style.color = "red";
    valid = false;
  }

  if (emailValue === "") {
    messageEmail.textContent = "El correo es obligatorio";
    messageEmail.style.color = "red";
    valid = false;
  } else if (!emailRegex.test(emailValue)) {
    messageEmail.textContent = "El correo no es válido";
    messageEmail.style.color = "red";
    valid = false;
  }

  if (!valid) {
    e.preventDefault();
  }
});
