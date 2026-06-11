const form = document.getElementById('loginForm');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const perfil = document.getElementById('perfil');
const perfilTexto = document.getElementById('perfilTexto');
const message = document.getElementById('message');
const togglePassword = document.getElementById('togglePassword');
const forgotLink = document.getElementById('forgotLink');

const nomesPerfis = {
  diretor: 'Diretor',
  supervisor: 'Supervisor',
  psicologo: 'Psicólogo',
  estagiario: 'Estagiário',
  paciente: 'Paciente',
  administrador: 'Administrador'
};

perfil.addEventListener('change', () => {
  perfilTexto.textContent = `Entrando como ${nomesPerfis[perfil.value]}`;
});

togglePassword.addEventListener('click', () => {
  const senhaEstaOculta = senha.type === 'password';

  senha.type = senhaEstaOculta ? 'text' : 'password';
  togglePassword.textContent = senhaEstaOculta ? 'Ocultar' : 'Mostrar';
});

forgotLink.addEventListener('click', (event) => {
  event.preventDefault();

  showMessage(
    'Solicitação de recuperação enviada. Verifique seu e-mail .',
    'success'
  );
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!email.value.trim() || !senha.value.trim()) {
    showMessage('Preencha o e-mail e a senha para acessar o sistema.', 'error');
    return;
  }

  if (!email.value.includes('@')) {
    showMessage('Digite um e-mail válido.', 'error');
    return;
  }

  showMessage(`Login com sucesso para o perfil: ${nomesPerfis[perfil.value]}.`, 'success');

  setTimeout(() => {
    alert(`Bem-vindo ao sistema! Perfil selecionado: ${nomesPerfis[perfil.value]}`);
  }, 300);
});

function showMessage(text, type) {
  message.textContent = text;
  message.className = `message ${type}`;
}
