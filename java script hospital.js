document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#cadastro form');

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault(); 

      const nome = form.querySelector('input[type="text"]').value.trim();
      const email = form.querySelector('input[type="email"]').value.trim();

      if (nome && email) {
        alert(`Obrigado, ${nome}! Seu cadastro foi enviado com sucesso para o e-mail ${email}.`);
        form.reset();
      } else {
        alert("Por favor, preencha seu nome e e-mail antes de enviar.");
      }
    });
  }
});



