function isLoggedIn() {
  // Verifica se há um token de autenticação armazenado no localStorage
  const token = localStorage.getItem('token');
  return !!token; // Converte o token em um booleano (true se houver um token, false caso contrário)
}

// Verifica se o usuário está logado
if (isLoggedIn()) {
  // Altera o menu de navegação para usuários logados
  
} else {
  // Deixa o menu de navegação padrão para usuários não autenticados
  document.getElementById("menu-login").style.display = "block";
  document.getElementById("menu-perfil").style.display = "none";
}