document.querySelector('.menu-toggle').addEventListener('click', function () {
  document.querySelector('.nav-menu').classList.toggle('active');
});

document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', function (event) {
    let name = form.querySelector('input[type="text"]').value.trim();
    let email = form.querySelector('input[type="email"]').value.trim();
    let resume = form.querySelector('input[type="file"]').files.length;

    if (name === "" || email === "" || resume === 0) {
      alert('Please fill in all required fields and upload your resume.');
      event.preventDefault();
    }
  });
});