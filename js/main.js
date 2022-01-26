let newYears = document.getElementById('footer-copy__date');
function footerDate() {
  let today = new Date();
  const newYearsDate = today.getFullYear();
  newYears.innerHTML = newYearsDate;
}

footerDate();
