// Edicao.jsx
import React, { useState, useEffect } from 'react';

function Stars({ isDark }) {
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
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.animationDelay}s`,
            backgroundColor: isDark ? 'white' : 'black',
          }}
        ></div>
      ))}
    </div>
  );
}

function Edicao() {
  // Estado de idioma
  const [isEnglish, setIsEnglish] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('language') === 'en';
    }
    return false;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', isEnglish ? 'en' : 'pt');
    }
  }, [isEnglish]);

  // Estado de tema (true = dark, false = light)
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') !== 'light';
    }
    return true;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }
  }, [isDark]);

  // Detecta a rota atual para destacar o link ativo
  const [currentPath, setCurrentPath] = useState("");
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }
  }, []);
  const isEdicaoPage = currentPath === "/edicao";
  const isHomePage = currentPath === "/";

  return (
    <>
      <style>
        {`
          @import url('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');

          /* Fundo e Animação de Estrelas (Tema Dark) */
          .bg-animated {
            background: radial-gradient(ellipse at center, #0a0a0a 0%, #000000 100%);
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
            border-radius: 50%;
            opacity: 0.8;
            animation: twinkle 2s ease-in-out infinite alternate;
          }
          @keyframes twinkle {
            from { opacity: 0.8; transform: scale(1); }
            to { opacity: 0.4; transform: scale(0.8); }
          }

          /* Neon Dark */
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

          /* Neon White (Tema Light) */
          .neon-border-light {
            border: 1px solid #333;
            box-shadow: 0 0 5px #333;
            transition: box-shadow 0.3s ease-in-out;
          }
          .neon-border-light:hover {
            box-shadow: 0 0 15px #333;
          }
          .neon-text-light {
            color: #333;
            text-shadow: 0 0 8px #333, 0 0 16px #333, 0 0 24px #333;
          }

          .animate-g {
            animation: pulseG 3s ease-in-out infinite;
          }
          @keyframes pulseG {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }

          @keyframes pulseNeon {
            0% {
              box-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 15px rgba(255,255,255,0.8);
            }
            100% {
              box-shadow: 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 30px rgba(255,255,255,0.8);
            }
          }
          .pulse-neon {
            animation: pulseNeon 1.5s infinite alternate ease-in-out;
          }
          @keyframes pulseNeonLight {
            0% {
              box-shadow: 0 0 5px #333, 0 0 10px #333, 0 0 15px rgba(51,51,51,0.8);
            }
            100% {
              box-shadow: 0 0 10px #333, 0 0 20px #333, 0 0 30px rgba(51,51,51,0.8);
            }
          }
          .pulse-neon-light {
            animation: pulseNeonLight 1.5s infinite alternate ease-in-out;
          }

          /* Fade-in */
          .fade-in {
            animation: fadeIn 1.5s ease-out both;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          /* Navegação - Dark */
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

          /* Navegação - White */
          .nav-link-light {
            position: relative;
            overflow: hidden;
          }
          .nav-link-light a {
            background: transparent;
            outline: none;
            color: #000;
            transition: color 0.3s ease, text-shadow 0.3s ease;
          }
          .nav-link-light::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: 0;
            left: -100%;
            background-color: #000;
            box-shadow: 0 0 10px #000, 0 0 20px #000;
            transition: left 0.3s ease;
          }
          .nav-link-light:hover::after {
            left: 0;
          }
          .nav-link-light a:hover {
            color: #000;
            text-shadow: 0 0 8px #000, 0 0 16px #000, 0 0 24px #000;
          }

          /* Ícones de Tema e Idioma */
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

      <div className={`h-screen w-screen flex flex-col ${isDark ? 'bg-animated text-white' : 'bg-gradient-to-br from-white to-gray-100 text-gray-900'}`}>
        {/* Estrelas de fundo */}
        <Stars isDark={isDark} />

        {/* Header */}
        <header className={`h-16 sticky top-0 px-4 transition-all duration-300 z-10 ${isDark ? 'bg-black/50 neon-border pulse-neon' : 'bg-white shadow-md border-b border-gray-200'}`}>
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <div className="w-1/3 flex items-center">
              <div className={`text-3xl md:text-4xl font-bold transition-transform duration-200 hover:scale-110 ${isDark ? 'neon-text animate-g' : 'text-gray-900'}`}>
                G
              </div>
            </div>

            {/* Navegação */}
            <div className="w-1/3">
              <nav className="flex justify-center items-center h-full">
                <ul className="flex space-x-6">
                  {/* Ordem: Dev, Design, Editing, Contact */}
                  <li className={`text-xl md:text-2xl transition-transform duration-200 hover:scale-110 ${isDark ? 'nav-link' : 'nav-link-light'} ${isHomePage ? (isDark ? 'border-b-2 border-white' : 'border-b-2 border-gray-900') : ''}`}>
                    <a href="/" className="bg-transparent focus:outline-none">
                      {isEnglish ? "Dev" : "Dev"}
                    </a>
                  </li>
                  <li className={`text-xl md:text-2xl transition-transform duration-200 hover:scale-110 ${isDark ? 'nav-link' : 'nav-link-light'}`}>
                    <a href="/design" className="bg-transparent focus:outline-none">
                      {isEnglish ? "Design" : "Design"}
                    </a>
                  </li>
                  <li className={`text-xl md:text-2xl transition-transform duration-200 hover:scale-110 ${isDark ? 'nav-link' : 'nav-link-light'} ${isEdicaoPage ? (isDark ? 'border-b-2 border-white' : 'border-b-2 border-gray-900') : ''}`}>
                    <a href="/edicao" className="bg-transparent focus:outline-none">
                      {isEnglish ? "Editing" : "Edição"}
                    </a>
                  </li>
                  <li className={`text-xl md:text-2xl transition-transform duration-200 hover:scale-110 ${isDark ? 'nav-link' : 'nav-link-light'}`}>
                    <a href="/contato" className="bg-transparent focus:outline-none">
                      {isEnglish ? "Contact" : "Contato"}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Botões de Tema e Idioma */}
            <div className="w-1/3 flex justify-end items-center space-x-4">
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 focus:outline-none"
                title={isEnglish ? "Switch Theme" : "Trocar Tema"}
              >
                <div className="theme-icon">
                  {/* Ícone Lua (Tema Dark) */}
                  <svg className={isDark ? "active" : "inactive"} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                  </svg>
                  {/* Ícone Sol (Tema Light) */}
                  <svg className={!isDark ? "active" : "inactive"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v2m6.364.636l-1.414 1.414M21 12h-2m-.636 6.364l-1.414-1.414M12 21v-2m-6.364-.636l1.414-1.414M3 12h2m.636-6.364L6.05 6.05M12 8a4 4 0 100 8 4 4 0 000-8z" />
                  </svg>
                </div>
              </button>

              <button
                onClick={() => setIsEnglish(!isEnglish)}
                className="p-2 focus:outline-none"
                title={isEnglish ? "Switch Language" : "Trocar Idioma"}
              >
                <div className="language-icon">
                  {/* Bandeira do Brasil (quando isEnglish = false) */}
                  <svg className={!isEnglish ? "active" : "inactive"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480">
                    <title>Português (BR)</title>
                    <rect width="640" height="480" fill="#009b3a" />
                    <polygon fill="#ffdf00" points="320,96 544,240 320,384 96,240" />
                    <circle cx="320" cy="240" r="80" fill="#002776" />
                  </svg>
                  {/* Bandeira dos EUA (quando isEnglish = true) */}
                  <svg className={isEnglish ? "active" : "inactive"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7410 3900">
                    <title>English (US)</title>
                    <path fill="#fff" d="M0 0h7410v3900H0z" />
                    <path fill="#b22234" d="M0 0h7410v390h-7410zm0 780h7410v390h-7410zm0 780h7410v390h-7410zm0 780h7410v390h-7410zm0 780h7410v390h-7410zm0 780h7410v390h-7410z" />
                    <path fill="#3c3b6e" d="M0 0h2960v2100H0z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </header>

        {/* Conteúdo Principal */}
        <main className="flex-1 p-4 flex flex-col justify-center items-center space-y-8 fade-in relative z-10">
          <section id="edicao" className="flex flex-col items-center space-y-10 fade-in">
            <div className="max-w-2xl text-center fade-in">
              <p className={`text-lg md:text-xl ${isDark ? 'text-white' : 'text-gray-700'}`}>
                {isEnglish
                  ? "I have been working with video editing for a long time and I am proficient in using various programs for different purposes and video complexities, with Adobe Premiere and Sony Vegas Pro being the main ones."
                  : "Trabalho com edição de vídeos há muito tempo e sei usar diversos programas para diferentes finalidades e complexidades de vídeo, sendo os principais o Adobe Premiere e o Sony Vegas Pro."}
              </p>
            </div>
            {/* Texto antes dos vídeos */}
            <div className="max-w-2xl text-center fade-in">
              <p className="text-xl md:text-2xl font-medium">
                {isEnglish ? "Here are some works I have already done:" : "Segue alguns trabalhos que já fiz:"}
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 fade-in">
              {/* Vídeo 1 */}
              <div className="w-full md:w-1/2 lg:w-1/3 p-2">
                <div className="w-full" style={{ height: '250px' }}>
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/iwdYgdUFfv4"
                    title="Video 1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              {/* Vídeo 2 */}
              <div className="w-full md:w-1/2 lg:w-1/3 p-2">
                <div className="w-full" style={{ height: '250px' }}>
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/iPnuyizMX-E"
                    title="Video 2"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              {/* Vídeo 3 */}
              <div className="w-full md:w-1/2 lg:w-1/3 p-2">
                <div className="w-full" style={{ height: '250px' }}>
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/ZNcbBGRYZwE"
                    title="Video 3"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              {/* Vídeo 4 */}
              <div className="w-full md:w-1/2 lg:w-1/3 p-2">
                <div className="w-full" style={{ height: '250px' }}>
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/w8D3hi79sFE"
                    title="Video 4"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
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

export default Edicao;
