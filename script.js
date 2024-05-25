function enviar(){
window.location.href = 'http://agradecimento.html>'
}

document.addEventListener("DOMContentLoaded", function() {
            const generatedPassword = document.getElementById("generatedPassword");
            const passwordInput = document.getElementById("passwordInput");
            const submitPassword = document.getElementById("submitPassword");

            // Gera uma senha aleatória de 4 dígitos
            const password = Math.floor(1000 + Math.random() * 9000).toString();
            generatedPassword.textContent = password;

            function verifyPassword() {
                const userPassword = passwordInput.value;
                if (userPassword === generatedPassword.textContent) {
                    window.location.href = "inicial.html";
                } else {
                    alert("Senha incorreta, tente novamente.");
                }
            }

            submitPassword.addEventListener("click", verifyPassword);

            passwordInput.addEventListener("keypress", function(event) {
                if (event.key === "Enter") {
                    verifyPassword();
                }
            });
        });

