import React from 'react';
import './LoginPage.css'; // Importa a folha de estilos do componente

/**
 * Componente da Página de Login.
 * Exibe um painel de informações e o formulário de login.
 * * @param {object} props - Propriedades recebidas do componente App.
 * @param {function} props.irParaRegistro - Função para navegar para a tela de Registro.
 * @param {function} props.irParaOnboarding - Função para navegar para a tela de Onboarding.
 */
function LoginPage({ irParaRegistro, irParaOnboarding }) {
    return (
        <div className="login-container">

            {/* Painel lateral de informações */}
            <div className="login-info-panel">
                <h1>Opty</h1>
                <p>Encontre os melhores preços em um só lugar</p>
                <ul>
                    <li>✓ Compare preços de milhares de produtos</li>
                    <li>✓ Receba alertas de promoções</li>
                    <li>✓ Economize tempo e dinheiro</li>
                </ul>
            </div>

            {/* Painel lateral com o formulário de login */}
            <div className="login-form-panel">
                <h2>Bem-Vindo de volta</h2>
                <p className="login-subtitle">Entre para continuar sua busca</p>

                {/* Formulário de login */}
                <form onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" />

                    <label htmlFor="senha">Senha</label>
                    <input type="password" id="senha" />

                    {/* Opções de "Lembrar de mim" e "Esqueci minha senha" */}
                    <div className="login-form-options">
                        <div className="login-remember-me">
                            <input type="checkbox" id="lembrar" />
                            <label htmlFor="lembrar">Lembrar de mim</label>
                        </div>
                        <a href="#">Esqueci minha senha</a>
                    </div>

                    {/* Botão de submit do formulário */}
                    <button type="button" onClick={irParaOnboarding}>
                        Entrar
                    </button>
                </form>

                {/* Link para a página de cadastro */}
                <div className="login-signup-link">
                    <p>Ainda não tem uma conta?
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault(); // Impede o comportamento padrão do link
                                irParaRegistro();   // Chama a função de navegação para registro
                            }}
                        >
                            Cadastre-se gratuitamente
                        </a>
                    </p>
                </div>
            </div>

        </div>
    );
}

export default LoginPage;