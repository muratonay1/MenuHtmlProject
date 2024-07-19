function loadContent(page) {
     document.getElementById('content-area').innerHTML = 'Yükleniyor...';
     $('#content-area').load(PAGES[page.getAttribute("data-page-id").toUpperCase()] + page.getAttribute("data-page-id") + ".html");
}
document.addEventListener("DOMContentLoaded", function () {
     const validUsername = "admin";
     const validPassword = "123";
     const validVerificationCode = "123";

     function loadContent(page) {
          document.getElementById('content-area').innerHTML = 'Yükleniyor...';
          $('#content-area').load(PAGES[page.toUpperCase()]+page+".html");
     }

     $('#loginModal').modal('show');

     document.getElementById('login-form').addEventListener('submit', function (event) {
          event.preventDefault();

          const username = document.getElementById('username').value;
          const password = document.getElementById('password').value;

          if (username === validUsername && password === validPassword) {
               document.getElementById('login-section').style.display = 'none';
               document.getElementById('verification-section').style.display = 'block';
          } else {
               alert('Kullanıcı adı veya şifre hatalı!');
          }
     });

     document.getElementById('verification-form').addEventListener('submit', function (event) {
          event.preventDefault();

          const verificationCode = document.getElementById('verification-code').value;

          if (verificationCode === validVerificationCode) {
               $('#loginModal').modal('hide');
               $('#content-area').load(PAGES.HOME+"home.html");
          } else {
               alert('Doğrulama kodu hatalı!');
          }
     });

     window.addEventListener('scroll', function () {
          const navbar = document.querySelector('.navbar');
          if (window.scrollY > 50) {
               navbar.classList.add('scrolled');
          } else {
               navbar.classList.remove('scrolled');
          }
     });
});
