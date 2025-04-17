// controla o modo escuro
const toggleBtn = document.getElementById('toggle-mode');
const body = document.body;
//seleciona o botão de alternância e o body
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  toggleBtn.textContent = body.classList.contains('dark-mode')
    ? '☀️ Modo Claro'
    : '🌙 Modo Escuro';
});
