// Contato.jsx
import React, { useState, useMemo, useEffect } from 'react';

function Contato() {
  // --------------------
  // Estados de "copiado"
  // --------------------
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDiscord, setCopiedDiscord] = useState(false);

  // --------------------
  // Tema (Lua/Sol)
  // --------------------
  const [isDark, setIsDark] = useState(true);

  // --------------------
  // Idioma (Brasil/EUA) - lê do localStorage
  // --------------------
  const [isEnglish, setIsEnglish] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('language') === 'en';
    }
    return false; 
  });

  // Ao mudar isEnglish, salvamos no localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', isEnglish ? 'en' : 'pt');
    }
  }, [isEnglish]);

  // --------------------
  // Rota atual: /contato?
  // --------------------
  const [currentPath, setCurrentPath] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);
  const isContactPage = currentPath === "/contato";

  // --------------------
  // Funções de copiar
  // --------------------
  const copyEmail = () => {
    navigator.clipboard.writeText("emailpessoalgustavo06@gmail.com")
      .then(() => {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      })
      .catch(() => {
        // Trate o erro se necessário
      });
  };

  const copyDiscord = () => {
    navigator.clipboard.writeText("@freakysz")
      .then(() => {
        setCopiedDiscord(true);
        setTimeout(() => setCopiedDiscord(false), 2000);
      })
      .catch(() => {
        // Trate o erro se necessário
      });
  };

  return (
    <>
      <style>
        {`
          @import url('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');

          /* =========================
             Fundo e Animação de Estrelas
             ========================= */
          .bg-animated {
            /* Fundo mais escuro e menos azulado, tipo espaço sideral */
            background: radial-gradient(
              ellipse at center,
              #0a0a0a 0%,
              #000000 100%
            );
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

          /* =========================
             Fade-in
             ========================= */
          .fade-in {
            animation: fadeIn 1.5s ease-out both;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          /* =========================
             Ícones de Contato
             ========================= */
          .contact-icon {
            width: 8rem;
            height: 8rem;
          }
          .icon-bg {
            background: #1f2937; /* gray-800 */
            border-radius: 9999px;
          }
          .tooltip {
            position: absolute;
            bottom: -2.5rem;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0, 0, 0, 0.8);
            color: #fff;
            padding: 0.25rem 0.5rem;
            border-radius: 0.25rem;
            font-size: 0.875rem;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s ease;
            white-space: nowrap;
          }
          .group:hover .tooltip {
            opacity: 1;
          }
          .copied-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 9999px;
            z-index: 10;
            font-size: 1rem;
            animation: copyAnimation 2s ease-out;
          }
          @keyframes copyAnimation {
            0% { opacity: 0; transform: scale(0.8); }
            20% { opacity: 1; transform: scale(1.1); }
            80% { opacity: 1; transform: scale(1); }
            100% { opacity: 0; transform: scale(1); }
          }

          /* =========================
             Header e Navegação
             ========================= */
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

          /* =========================
             Ícones de idioma
             ========================= */
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
        {/* Fundo de Estrelas */}
        <Stars />

        {/* Header fixo */}
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
                  <li className="text-xl md:text-2xl transition-transform duration-200 hover:scale-110 nav-link">
                    <a href="/" className="bg-transparent focus:outline-none">
                      {isEnglish ? "Dev" : "Dev"}
                    </a>
                  </li>
                  <li className="text-xl md:text-2xl transition-transform duration-200 hover:scale-110 nav-link">
                    <a href="/design" className="bg-transparent focus:outline-none">
                      {isEnglish ? "Design" : "Design"}
                    </a>
                  </li>
                  <li className="text-xl md:text-2xl transition-transform duration-200 hover:scale-110 nav-link">
                    <a href="/edicao" className="bg-transparent focus:outline-none">
                      {isEnglish ? "Editing" : "Edição"}
                    </a>
                  </li>
                  <li
                    className={`
                      text-xl md:text-2xl transition-transform duration-200 hover:scale-110 nav-link
                      ${isContactPage ? "border-b-2 border-white" : ""}
                    `}
                  >
                    <a href="/contato" className="bg-transparent focus:outline-none">
                      {isEnglish ? "Contact" : "Contato"}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Botões no canto direito: Tema + Idioma */}
            <div className="w-1/3 flex justify-end items-center space-x-4">
              {/* Troca de Tema */}
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 focus:outline-none"
                title={isEnglish ? "Switch Theme" : "Trocar Tema"}
              >
                <div className="theme-icon">
                  {/* Ícone Lua (Dark) */}
                  <svg
                    className={isDark ? "active" : "inactive"}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                  </svg>
                  {/* Ícone Sol (Light) */}
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

              {/* Troca de Idioma */}
              <button
                onClick={() => setIsEnglish(!isEnglish)}
                className="p-2 focus:outline-none"
                title={isEnglish ? "Switch Language" : "Trocar Idioma"}
              >
                <div className="language-icon">
                  {/* Bandeira BR (quando isEnglish = false) */}
                  <svg
                    className={!isEnglish ? "active" : "inactive"}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 480"
                  >
                    <title>Português (BR)</title>
                    <rect width="640" height="480" fill="#009b3a" />
                    <polygon
                      fill="#ffdf00"
                      points="320,96 544,240 320,384 96,240"
                    />
                    <circle cx="320" cy="240" r="80" fill="#002776" />
                  </svg>

                  {/* Bandeira EUA (quando isEnglish = true) */}
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
        <main className="flex-1 p-4 flex flex-col items-center justify-center relative z-10 fade-in">
          <p className="text-lg md:text-xl text-center mb-8">
            {isEnglish
              ? "I don't like social media, so these are my only ways to contact me."
              : "Não gosto de redes sociais, portanto esses são os únicos meios de ter contato comigo"
            }
          </p>

          <div className="flex space-x-8">
            {/* Ícone de Email */}
            <div onClick={copyEmail} className="relative group cursor-pointer">
              <div className="contact-icon icon-bg flex items-center justify-center transition-transform duration-300 hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 h-16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a1 1 0 001.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="tooltip">emailpessoalgustavo06@gmail.com</span>
              {copiedEmail && (
                <div className="copied-overlay">
                  {isEnglish ? "Copied!" : "Copiado!"}
                </div>
              )}
            </div>

            {/* Ícone de Discord */}
            <div onClick={copyDiscord} className="relative group cursor-pointer">
              <div className="contact-icon icon-bg flex items-center justify-center transition-transform duration-300 hover:scale-110">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 h-16"
                  fill="currentColor"
                >
                  <title>Discord</title>
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5153.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2493-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3935-.4058-.874-.6163-1.2493a.077.077 0 00-.0785-.0371 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8858-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0787.0095c.1202.099.2462.1981.372.2924a.077.077 0 01-.0077.1276 12.2986 12.2986 0 01-1.886.8924.0766.0766 0 00-.0407.1067c.3604.699.7719 1.3639 1.226 1.9943a.076.076 0 00.0843.0286c1.961-.6076 3.9495-1.5228 6.0023-3.0294a.0777.0777 0 00.0313-.0552c.5-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1487-1.0857-2.1487-2.419 0-1.3332.9554-2.4189 2.1487-2.4189 1.2108 0 2.1757 1.0952 2.1487 2.4189 0 1.3333-.955 2.419-2.1487 2.419zm7.9748 0c-1.1824 0-2.1486-1.0857-2.1486-2.419 0-1.3332.9551-2.4189 2.1486-2.4189 1.2108 0 2.1758 1.0952 2.1488 2.4189 0 1.3333-.938 2.419-2.1488 2.419Z"/>
                </svg>
              </div>
              <span className="tooltip">freakyzz</span>
              {copiedDiscord && (
                <div className="copied-overlay">
                  {isEnglish ? "Copied!" : "Copiado!"}
                </div>
              )}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-xs py-2 relative z-10">
          &copy; {new Date().getFullYear()} - Gustavo Nunes
        </footer>
      </div>
    </>
  );
}

// Fundo de estrelas memorizado
const Stars = React.memo(function Stars() {
  const numStars = 100;
  const stars = useMemo(() => {
    return Array.from({ length: numStars }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 2 + 1,
      animationDelay: Math.random() * 2,
    }));
  }, []);

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
          }}
        ></div>
      ))}
    </div>
  );
});

export default Contato;
