
function loadContent(pageElement) {
     const pageId = pageElement.getAttribute("data-page-id");
     const pagePath = PAGES[pageId.toUpperCase()] + pageId + ".html";

     document.getElementById('content-area').innerHTML = 'Yükleniyor...';

     $('#content-area').load(pagePath, function (response, status, xhr) {
          if (status === "error") {
               console.error("Sayfa yüklenemedi: " + xhr.status + " " + xhr.statusText);
               document.getElementById('content-area').innerHTML = 'Sayfa yüklenemedi.';
          } else {
               const scriptPath = PAGES[pageId.toUpperCase()] + pageId + ".js";
               $.getScript(scriptPath)
                    .fail(function (jqxhr, settings, exception) {
                         console.error("JS yüklenemedi: " + scriptPath, exception);
                    });
          }
     });
}

document.addEventListener("DOMContentLoaded", function () {
     const validUsername = "admin";
     const validPassword = "123";
     const validVerificationCode = "123";

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
               const homeLink = document.querySelector('a[data-page-id="home"]');
               loadContent(homeLink);
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

     const homeLink = document.querySelector('a[data-page-id="home"]');
     loadContent(homeLink);
});
