const inputSenha = document.getElementById("password");
const botao = document.getElementById("togglePassword");
const icon = document.getElementById("icon");

botao.addEventListener("click", () => {
  if (inputSenha.type === "password") {
    inputSenha.type = "text";
    icon.textContent="visibility";
  } else {
    inputSenha.type = "password";
    icon.textContent="visibility_off";
  }
});