// MiniPortfolio.jsx
import React, { useState, useEffect } from 'react';
import minhaFoto from './minhafoto.jpg';
import reactLogo from './react.png';
import jsLogo from './javascript.png';
import cssLogo from './css.png';
import pythonLogo from './python.png';

function Stars() {
  const numStars = 100;
  const stars = Array.from({ length: numStars }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 2 + 1,
    animationDelay: Math.random() * 2,
  }));

  return (
    <div className="stars-container">
      {stars.map(star => (
        <div
          key={star.id}
          className="star"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.animationDelay}s`,
          }}
        ></div>
      ))}
    </div>
  );
}

function MiniPortfolio() {
  // -----------------------------------------------------
  // 1) Lemos do localStorage se o usuário já tem idioma salvo
  //    Caso contrário, iniciamos em português (false).
  // -----------------------------------------------------
  const [isEnglish, setIsEnglish] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('language') === 'en';
    }
    return false; // padrão
  });

  // -----------------------------------------------------
  // 2) Toda vez que "isEnglish" mudar, salvamos no localStorage
  // -----------------------------------------------------
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', isEnglish ? 'en' : 'pt');
    }
  }, [isEnglish]);

  // Tema (lua/sol)
  const [isDark, setIsDark] = useState(true);

  // Detecta a rota atual para destacar "Dev" se for a home
  const [currentPath, setCurrentPath] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);
  const isHomePage = currentPath === "/";

  return (
    <>
      <style>
        {`
          @import url('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');

          .neon-border {
            border: 1px solid #ffffff;
            box-shadow: 0 0 5px #ffffff;
            transition: box-shadow 0.3s ease-in-out;
          }
          .neon-border:hover {
            box-shadow: 0 0 15px #ffffff;
          }

          .neon-text {
            color: #ffffff;
            text-shadow: 0 0 8px #ffffff, 0 0 16px #ffffff, 0 0 24px #ffffff;
          }

          .animate-g {
            animation: pulseG 3s ease-in-out infinite;
          }
          @keyframes pulseG {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }

          .fade-in {
            animation: fadeIn 1.5s ease-out both;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .hexagon-img {
            width: 200px;
            height: 200px;
            clip-path: polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%);
            object-fit: cover;
            animation: scalePulseHex 3.5s ease-in-out infinite;
          }
          @keyframes scalePulseHex {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }

          .interactive-img {
            transition: transform 0.3s ease, filter 0.3s ease;
          }
          .interactive-img:hover {
            transform: scale(1.1);
            filter: brightness(1.2);
          }

          .bg-animated {
            background: radial-gradient(ellipse at bottom, rgb(5, 11, 18) 0%, #090a0f 100%);
            position: relative;
            overflow: hidden;
          }
          .stars-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
          }
          .star {
            position: absolute;
            background-color: white;
            border-radius: 50%;
            opacity: 0.8;
            animation: twinkle 2s ease-in-out infinite alternate;
          }
          @keyframes twinkle {
            from { opacity: 0.8; transform: scale(1); }
            to { opacity: 0.4; transform: scale(0.8); }
          }

          .nav-link {
            position: relative;
            overflow: hidden;
          }
          .nav-link a {
            background: transparent;
            outline: none;
            color: #ffffff;
            transition: color 0.3s ease, text-shadow 0.3s ease;
          }
          .nav-link::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: 0;
            left: -100%;
            background-color: #fff;
            box-shadow: 0 0 10px #fff, 0 0 20px #fff;
            transition: left 0.3s ease;
          }
          .nav-link:hover::after {
            left: 0;
          }
          .nav-link a:hover {
            color: #ffffff;
            text-shadow: 0 0 8px #ffffff, 0 0 16px #ffffff, 0 0 24px #ffffff;
          }

          .theme-icon {
            position: relative;
            width: 24px;
            height: 24px;
          }
          .theme-icon svg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transition: opacity 0.5s ease, transform 0.5s ease;
          }
          .theme-icon .active {
            opacity: 1;
            transform: rotate(0deg);
          }
          .theme-icon .inactive {
            opacity: 0;
            transform: rotate(-90deg);
          }

          /* Ícones de idioma */
          .language-icon {
            position: relative;
            width: 24px;
            height: 24px;
          }
          .language-icon svg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transition: opacity 0.5s ease, transform 0.5s ease;
          }
          .language-icon .active {
            opacity: 1;
            transform: rotate(0deg);
          }
          .language-icon .inactive {
            opacity: 0;
            transform: rotate(90deg);
          }
        `}
      </style>

      <div className="h-screen w-screen bg-animated text-white flex flex-col">
        {/* Estrelas animadas */}
        <Stars />

        {/* Header com opacidade reduzida */}
        <header className="h-16 bg-black/50 neon-border sticky top-0 px-4 transition-all duration-300 z-10">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <div className="w-1/3 flex items-center">
              <div className="text-3xl md:text-4xl font-bold neon-text animate-g transition-transform duration-200 hover:scale-110">
                G
              </div>
            </div>

            {/* Navegação */}
            <div className="w-1/3">
              <nav className="flex justify-center items-center h-full">
                <ul className="flex space-x-6">
                  <li
                    className={`
                      text-xl md:text-2xl transition-transform duration-200 hover:scale-110 nav-link
                      ${isHomePage ? "border-b-2 border-white" : ""}
                    `}
                  >
                    <a href="/" className="bg-transparent focus:outline-none">
                      {/* "Dev" pode continuar igual em ambos idiomas */}
                      {isEnglish ? "Dev" : "Dev"}
                    </a>
                  </li>
                  <li className="text-xl md:text-2xl transition-transform duration-200 hover:scale-110 nav-link">
                    <a href="/design" className="bg-transparent focus:outline-none">
                      {/* "Design" idem */}
                      {isEnglish ? "Design" : "Design"}
                    </a>
                  </li>
                  <li className="text-xl md:text-2xl transition-transform duration-200 hover:scale-110 nav-link">
                    <a href="/edicao" className="bg-transparent focus:outline-none">
                      {isEnglish ? "Editing" : "Edição"}
                    </a>
                  </li>
                  <li className="text-xl md:text-2xl transition-transform duration-200 hover:scale-110 nav-link">
                    <a href="/contato" className="bg-transparent focus:outline-none">
                      {isEnglish ? "Contact" : "Contato"}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Botões do lado direito: Tema + Idioma */}
            <div className="w-1/3 flex justify-end items-center space-x-4">
              {/* Botão de Troca de Tema */}
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 focus:outline-none"
                title={isEnglish ? "Switch Theme" : "Trocar Tema"}
              >
                <div className="theme-icon">
                  {/* Ícone Lua (dark) */}
                  <svg
                    className={isDark ? "active" : "inactive"}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                  </svg>
                  {/* Ícone Sol (light) */}
                  <svg
                    className={!isDark ? "active" : "inactive"}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 3v2m6.364.636l-1.414 1.414M21 12h-2m-.636 6.364l-1.414-1.414M12 21v-2m-6.364-.636l1.414-1.414M3 12h2m.636-6.364L6.05 6.05M12 8a4 4 0 100 8 4 4 0 000-8z"
                    />
                  </svg>
                </div>
              </button>

              {/* Botão de Troca de Idioma (BR/EUA) */}
              <button
                onClick={() => setIsEnglish(!isEnglish)}
                className="p-2 focus:outline-none"
                title={isEnglish ? "Switch Language" : "Trocar Idioma"}
              >
                <div className="language-icon">
                  {/* Bandeira do Brasil => aparece se isEnglish = false */}
                  <svg
                    className={!isEnglish ? "active" : "inactive"}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 480"
                  >
                    <title>Português (BR)</title>
                    <path fill="#009b3a" d="M0 0h640v480H0z" />
                    <ellipse
                      cx="320"
                      cy="240"
                      fill="#ffdf00"
                      rx="180"
                      ry="180"
                    />
                    <path
                      fill="#002776"
                      d="M138 240a182 182 0 01364 0 182 182 0 01-364 0"
                    />
                  </svg>

                  {/* Bandeira dos EUA => aparece se isEnglish = true */}
                  <svg
                    className={isEnglish ? "active" : "inactive"}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 7410 3900"
                  >
                    <title>English (US)</title>
                    <path fill="#fff" d="M0 0h7410v3900H0z" />
                    <path
                      fill="#b22234"
                      d="M0 0h7410v390h-7410zm0 780h7410v390h-7410zm0 780h7410v390h-7410zm0 780h7410v390h-7410zm0 780h7410v390h-7410zm0 780h7410v390h-7410z"
                    />
                    <path fill="#3c3b6e" d="M0 0h2960v2100H0z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </header>

        {/* Conteúdo Principal */}
        <main className="flex-1 p-4 space-y-8 fade-in relative z-10">
          <section id="home" className="flex flex-col items-center space-y-6 fade-in">
            {/* Foto Hexagonal */}
            <div className="fade-in">
              <img
                src={minhaFoto}
                alt={isEnglish ? "My Photo" : "Minha Foto"}
                className="hexagon-img"
              />
            </div>

            {/* Texto de apresentação */}
            <div className="max-w-md text-center fade-in">
              <p className="text-gray-300 text-lg md:text-xl">
                {isEnglish ? (
                  <>
                    I'm Gustavo Nunes, a Computer Science student at UniBH (5th semester). 
                    I develop front-end solutions for web and mobile using JavaScript, React, TailwindCSS, 
                    Flutter, and Dart. I also have knowledge in Python and apply agile methodologies (Scrum) 
                    for efficient, high-quality deliveries.
                  </>
                ) : (
                  <>
                    Sou Gustavo Nunes, estudante de Ciências da Computação no UniBH (5º período).
                    Desenvolvo soluções front-end para web e mobile utilizando JavaScript, React, TailwindCSS,
                    Flutter e Dart. Também tenho conhecimentos em Python e aplico metodologias ágeis (Scrum)
                    para entregas eficientes e de alta qualidade.
                  </>
                )}
              </p>
            </div>

            {/* Ícones de tecnologias */}
            <div className="flex space-x-6 fade-in">
              <img
                src={reactLogo}
                alt="React"
                className="interactive-img w-16 h-16"
              />
              <img
                src={jsLogo}
                alt="JavaScript"
                className="interactive-img w-16 h-16"
              />
              <img
                src={cssLogo}
                alt="CSS"
                className="interactive-img w-16 h-16"
              />
              <img
                src={pythonLogo}
                alt="Python"
                className="interactive-img w-16 h-16"
              />
            </div>
          </section>
        </main>

        <footer className="text-center text-gray-500 text-xs py-2 fade-in relative z-10">
          &copy; {new Date().getFullYear()} - Gustavo Nunes
        </footer>
      </div>
    </>
  );
}

export default MiniPortfolio;
