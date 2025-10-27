import React, { useState } from 'react';

// Importação dos componentes de página
import LoginPage from './LoginPage.jsx';
import RegisterPage from './RegisterPage.jsx';
import OnboardingPage from './OnboardingPage.jsx';

/**
 * Componente principal da aplicação.
 * Gerencia o estado de navegação entre as telas.
 */
function App() {
  // Estado que armazena qual tela está ativa no momento. Inicia com 'login'.
  const [telaAtual, setTelaAtual] = useState('login');

  // Funções para atualizar o estado e navegar entre as telas
  const irParaLogin = () => setTelaAtual('login');
  const irParaRegistro = () => setTelaAtual('register');
  const irParaOnboarding = () => setTelaAtual('onboarding');

  // Variável para armazenar o componente da página atual
  let currentPage;

  // Lógica de renderização condicional para exibir a página correta
  if (telaAtual === 'login') {
    currentPage = <LoginPage irParaRegistro={irParaRegistro} irParaOnboarding={irParaOnboarding} />;
  }
  else if (telaAtual === 'register') {
    currentPage = <RegisterPage irParaLogin={irParaLogin} irParaOnboarding={irParaOnboarding} />;
  }
  else {
    // A tela de Onboarding recebe a função para voltar ao login
    currentPage = <OnboardingPage irParaLogin={irParaLogin} />;
  }

  // Renderiza a página atual dentro de um Fragmento React
  return (
    <>
      {currentPage}
    </>
  );
}

export default App;