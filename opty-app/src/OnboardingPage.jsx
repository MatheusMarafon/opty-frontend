// 1. Importamos o useState
import React, { useState } from 'react';
import './OnboardingPage.css';

// Dados de exemplo para as categorias
const categorias = [
    { id: 'tec', nome: 'Tecnologia' },
    { id: 'moda', nome: 'Moda e Roupas' },
    { id: 'casa', nome: 'Casa e Eletros' },
    { id: 'games', nome: 'Games' },
    { id: 'livros', nome: 'Livros' },
    { id: 'saude', nome: 'Saúde' },
    { id: 'beleza', nome: 'Beleza' },
    { id: 'esporte', nome: 'Esportes' },
    { id: 'mercado', nome: 'Mercado' },
];

function OnboardingPage({ irParaLogin }) {
    // 2. Estado para controlar o passo atual
    const [step, setStep] = useState(1); // Começa no passo 1

    // 3. Estado para guardar as categorias selecionadas
    const [selectedCategories, setSelectedCategories] = useState([]);

    // 4. Função para avançar
    const proximoPasso = () => {
        // Só avança se não estiver no último passo
        if (step < 3) {
            setStep(step + 1);
        }
    };

    // 5. Função para voltar
    const passoAnterior = () => {
        // Só volta se não estiver no primeiro passo
        if (step > 1) {
            setStep(step - 1);
        }
    };

    // 6. Função para lidar com clique na categoria
    const handleCategoryClick = (categoryId) => {
        // Verifica se a categoria já está selecionada
        if (selectedCategories.includes(categoryId)) {
            // Se sim, remove
            setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
        } else {
            // Se não, adiciona
            setSelectedCategories([...selectedCategories, categoryId]);
        }
    };

    // 7. Calcula o preenchimento da barra de progresso
    // (Ex: Passo 1 = 33%, Passo 2 = 66%, Passo 3 = 100%)
    const progressWidth = (step / 3) * 100;

    // 8. Corrigido: return usa parênteses ()
    return (
        <div className="onboarding-overlay">
            <div className="onboarding-container">

                {/* 9. Conteúdo do passo é dinâmico */}
                <p className="onboarding-step">Passo {step} de 3</p>

                {/* --- PASSO 1 --- */}
                {step === 1 && (
                    <>
                        <h2>Personalize sua experiência</h2>
                        <p className="onboarding-subtitle">Isso nos ajudará a encontrar as melhores ofertas para você</p>
                    </>
                )}

                {/* --- PASSO 2 --- */}
                {step === 2 && (
                    <>
                        <h2>Quais suas lojas favoritas?</h2>
                        <p className="onboarding-subtitle">Selecione as lojas onde você mais compra.</p>
                    </>
                )}

                {/* --- PASSO 3 --- */}
                {step === 3 && (
                    <>
                        <h2>Alerta de Preços</h2>
                        <p className="onboarding-subtitle">Gostaria de receber notificações quando um produto cair de preço?</p>
                    </>
                )}

                {/* Barra de progresso dinâmica */}
                <div className="onboarding-progress-bar">
                    {/* 10. Estilo inline para controlar a largura */}
                    <div
                        className="onboarding-progress-fill"
                        style={{ width: `${progressWidth}%` }}
                    ></div>
                </div>

                {/* --- CONTEÚDO DO PASSO 1 --- */}
                {step === 1 && (
                    <>
                        <h3>Quais categorias você mais compra?</h3>
                        <p className="onboarding-subtitle">Selecione todas que se aplicam</p>

                        {/* 11. Grid de categorias dinâmico */}
                        <div className="onboarding-grid">
                            {categorias.map((categoria) => {
                                // 12. Verifica se a categoria está selecionada
                                const isSelected = selectedCategories.includes(categoria.id);
                                return (
                                    <div
                                        key={categoria.id}
                                        // 13. Adiciona a classe 'selected' dinamicamente
                                        className={`onboarding-category-item ${isSelected ? 'selected' : ''}`}
                                        onClick={() => handleCategoryClick(categoria.id)}
                                    >
                                        {/* (Você pode adicionar ícones aqui) */}
                                        {categoria.nome}
                                    </div>
                                );
                            })}
                        </div>
                    </>
                )}

                {/* --- CONTEÚDO DO PASSO 2 (Placeholder) --- */}
                {step === 2 && (
                    <div className="onboarding-placeholder">
                        <p>(Aqui entraria a seleção de lojas)</p>
                    </div>
                )}

                {/* --- CONTEÚDO DO PASSO 3 (Placeholder) --- */}
                {step === 3 && (
                    <div className="onboarding-placeholder">
                        <p>(Aqui entrariam as opções de notificação)</p>
                    </div>
                )}


                {/* 14. Botões de navegação dinâmicos */}
                <div className="onboarding-footer">
                    {/* Só mostra 'Voltar' depois do passo 1 */}
                    {step > 1 && (
                        <button className="onboarding-back-btn" onClick={passoAnterior}>
                            Voltar
                        </button>
                    )}

                    {/* Mostra 'Próximo' ou 'Finalizar' */}
                    {step < 3 ? (
                        <button className="onboarding-next-btn" onClick={proximoPasso}>
                            Próximo
                        </button>
                    ) : (
                        <button className="onboarding-next-btn" onClick={irParaLogin}>
                            Finalizar
                        </button>
                    )}
                </div>

            </div>
        </div>
    );
}

export default OnboardingPage;