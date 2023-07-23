document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const loginMessage = document.getElementById('login-message');
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const username = loginForm.username.value;
      const password = loginForm.password.value;
  
      if (username === 'Gas' && password === '1234') {
        loginMessage.innerText = 'Inicio de sesión exitoso. Redirigiendo...';
        
        // Establecer el nombre de usuario solo si las credenciales son válidas
        localStorage.setItem('nombreUsuario', username);
        
        window.location.replace('../../index.html');
      } else {
        loginMessage.innerText = 'Credenciales incorrectas. Inténtalo de nuevo.';
      }
    });

    
  });
  


