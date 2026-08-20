const configuracion = {
  nombreInstitucion: "Tu institución",
  logoArriba: "assets/logo-arriba.png",
  logoAbajo: "assets/logo-abajo.png"
};

document.querySelector(".logo-top").src = configuracion.logoArriba;
document.querySelector(".logo-bottom").src = configuracion.logoAbajo;
document.getElementById("footerName").textContent = configuracion.nombreInstitucion;

const form = document.getElementById("validationForm");
const formCard = document.getElementById("formCard");
const resultCard = document.getElementById("resultCard");
const resultRut = document.getElementById("resultRut");
const resultCode = document.getElementById("resultCode");
const clearButton = document.getElementById("clearButton");
const newValidation = document.getElementById("newValidation");
const captchaBox = document.getElementById("captchaBox");
let captchaChecked = false;

function toggleCaptcha(){
  captchaChecked=!captchaChecked;
  captchaBox.classList.toggle("checked",captchaChecked);
  captchaBox.setAttribute("aria-checked",captchaChecked?"true":"false");
}
captchaBox.addEventListener("click",toggleCaptcha);
captchaBox.addEventListener("keydown",(e)=>{
  if(e.key===" "||e.key==="Enter"){e.preventDefault();toggleCaptcha();}
});

clearButton.addEventListener("click",()=>{
  form.reset();
  captchaChecked=false;
  captchaBox.classList.remove("checked");
  captchaBox.setAttribute("aria-checked","false");
});

form.addEventListener("submit",(e)=>{
  e.preventDefault();
  const rut=document.getElementById("rut").value.trim();
  const code=document.getElementById("code").value.trim();
  if(!rut||!code){alert("Complete el RUT y el código de verificación.");return;}
  if(!captchaChecked){alert('Marque la casilla "No soy un robot".');return;}
  resultRut.textContent=rut;
  resultCode.textContent=code.toUpperCase();
  formCard.classList.add("hidden");
  resultCard.classList.remove("hidden");
  window.scrollTo({top:0,behavior:"smooth"});
});

newValidation.addEventListener("click",()=>{
  form.reset();
  captchaChecked=false;
  captchaBox.classList.remove("checked");
  captchaBox.setAttribute("aria-checked","false");
  resultCard.classList.add("hidden");
  formCard.classList.remove("hidden");
  window.scrollTo({top:0,behavior:"smooth"});
});
