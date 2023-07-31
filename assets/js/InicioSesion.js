const user1 = "gasdicundo";
const pass1 = "gaston";
const user2 = "caropianelli";
const pass2 = "carolina";


document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const loginMessage = document.getElementById("login-message");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === user1 && password === pass1) {
      Swal.fire({
        title: 'Inicio exitoso!',
        text: 'Tu inicio de sesión ha sido exitoso',
        icon: 'success',
        confirmButtonText: 'Continuar'
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.setItem("nombreUsuario", username);
          window.location.replace("/JavaScript/Proyecto2/index.html");
        }
      });

    } else if (username === user2 && password === pass2) {
      Swal.fire({
        title: 'Inicio exitoso!',
        text: 'Tu inicio de sesión ha sido exitoso',
        icon: 'success',
        confirmButtonText: 'Continuar'
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.setItem("nombreUsuario", username);
          window.location.replace("/JavaScript/Proyecto2/index.html");
        }
      });

    } else {
      Swal.fire({
        title: 'Inicio denegado!',
        text: 'Credenciales incorrectas. Inténtalo de nuevo',
        icon: 'error',
        confirmButtonText: 'Continuar'
      })
      // loginMessage.innerText = "Credenciales incorrectas. Inténtalo de nuevo.";
    }
  });
});

const btn = document.querySelector('#boton-inicio')
btn.addEventListener('click', () => {
  Swal.fire({
    title: 'Inicio exitoso!',
    text: 'Tu inicio de sesión ha sido exitoso',
    icon: 'success',
    confirmButtonText: 'Continuar'
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.setItem("nombreUsuario", username);
      window.location.replace("/JavaScript/Proyecto2/index.html");
    }
  });
});



