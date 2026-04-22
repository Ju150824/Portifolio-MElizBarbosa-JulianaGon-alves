let form = document.getElementById("formContato");

if (form) {
    form.addEventListener("submit", function(e) {

        let nome = document.getElementById("nome").value;
        let email = document.getElementById("email").value;
        let mensagem = document.getElementById("mensagem").value;

        if (nome === "" || email === "" || mensagem === "") {
            e.preventDefault();
            document.getElementById("erro").innerText = "Preencha todos os campos!";
        }

    });
}

function toggleMenu() {
    document.getElementById("menu").classList.toggle("ativo");
}
let mensagem = document.getElementById("mensagem");
let contador = document.getElementById("contador");

if (mensagem && contador) {
    mensagem.addEventListener("input", function() {
        let quantidade = mensagem.value.length;
        contador.innerText = quantidade + " / 200 caracteres";
    });
}