const form = document.querySelector('.user');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // previne o envio padrão do formulário

  const email = document.getElementById('email').value;
  const senha = document.getElementById('password').value;

  const data = {
    "Email": email,
    "Senha": senha
  };

  fetch('http://localhost:3000/cliente/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
  },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) {
      return response.json(); // converte a resposta para JSON
    } else {
      alert('E-mail ou senha invalidos');
      throw new Error('Credenciais inválidas!');
    }
  })
  .then(data => {
    // Armazena o token no localStorage
    localStorage.setItem('token', data.token);
    alert('Login realizado com sucesso!');
    window.location.href = 'index.html'; // redireciona para a página dashboard.html
  })
  .catch(error => console.error(error));
});