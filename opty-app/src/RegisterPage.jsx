import React from 'react';
import './RegisterPage.css'; // Importando o CSS de registro

// 1. Recebemos 'irParaLogin' E 'irParaOnboarding' do App.js
function RegisterPage({ irParaLogin, irParaOnboarding }) {
    return (
        // Container principal (igual ao de login)
        <div className="register-container">

            {/* Coluna da Esquerda (idêntica) */}
            <div className="register-info-panel">
                <h1>Opty</h1>
                <p>Encontre os melhores preços em um só lugar</p>
                <ul>
                    <li>✓ Compare preços de milhares de produtos</li>
                    <li>✓ Receba alertas de promoções</li>
                    <li>✓ Economize tempo e dinheiro</li>
                </ul>
            </div>

            {/* Coluna da Direita (Formulário de Registro) */}
            <div className="register-form-panel">
                <h2>Crie sua conta</h2>
                <p className="register-subtitle">Rápido e fácil, comece a economizar.</p>

                {/* 2. Adicionamos 'onSubmit' ao form para impedir recarregamento */}
                <form onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" id="nome" />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" />

                    <label htmlFor="senha">Senha</label>
                    <input type="password" id="senha" />

                    <label htmlFor="confirmar-senha">Confirmar Senha</label>
                    <input type="password" id="confirmar-senha" />

                    {/* 3. Botão agora é 'type="button"' e chama 'irParaOnboarding' */}
                    <button type="button" onClick={irParaOnboarding}>
                        Cadastrar
                    </button>
                </form>

                <div className="register-login-link">
                    <p>Já tem uma conta?
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault(); // Impede o link de recarregar a página
                                irParaLogin();      // Chama a função que VOLTA pra tela de login
                            }}
                        >
                            Entre aqui
                        </a>
                    </p>
                </div>
            </div>

        </div>
    );
}

export default RegisterPage;