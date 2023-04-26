const form = document.querySelector('.user');
  form.addEventListener('submit', async (event) => {
  event.preventDefault(); // previne o envio padrão do formulário
      
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  const senha = document.getElementById('senha').value;

      const data = {
        "Nome": nome,
        "Email": email,
        "Telefone": telefone,
        "Senha": senha
      };

      console.log(data)

      await fetch('http://localhost:3000/cliente/cadastro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        if (response.ok) {
          alert('Cadastro realizado com sucesso!');
          form.reset();
        } else {
          throw new Error('Erro ao cadastrar o cliente!');
        }
      })
      .catch(error => console.error(error));
});