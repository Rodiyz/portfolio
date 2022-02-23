
//footer date

let newYears = document.getElementById('footer-copy__date');
function footerDate() {
  let today = new Date();
  const newYearsDate = today.getFullYear();
  newYears.innerHTML = newYearsDate;
}

footerDate();



// menu for mobile

let mobileMenuOpen = document.getElementById('open-menu');
let mobileMenuClosed = document.getElementById('closed-menu');
let headNavigation = document.getElementById('header-mobile-container');

mobileMenuOpen.onclick = function menuToggleOn() {
  mobileMenuOpen.classList.remove('open-menu');
  mobileMenuOpen.classList.add('closed-menu');
  mobileMenuClosed.classList.remove('closed-menu');
  mobileMenuClosed.classList.add('open-menu');
  headNavigation.classList.remove('header-mobile-container');
  headNavigation.classList.add('header-mobile-container__open');
}

mobileMenuClosed.onclick = function menuToggleOff() {
  mobileMenuOpen.classList.remove('closed-menu');
  mobileMenuOpen.classList.add('open-menu');
  mobileMenuClosed.classList.remove('open-menu');
  mobileMenuClosed.classList.add('closed-menu');
  headNavigation.classList.remove('header-mobile-container__open');
  headNavigation.classList.add('header-mobile-container');
}



//reset form

let formName = document.getElementById('formControlInput1');
let formEmail = document.getElementById('formControlInput2');
let formText = document.getElementById('formControlTextarea1');
let btnForm = document.getElementByID('contact-form-btn');

btnForm.onclick = function resetForm() {
  formName.reset();
  formEmail.reset();
  formText.reset();
}
