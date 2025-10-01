"use client";

import { useState, useEffect } from "react";
// next/image와 page.module.css import를 제거했습니다.

// 1. 언어별 회사 소개 텍스트 데이터 (JSX 요소로 변경)
const introductions = {
  en: (
    <>
      Dreamball is a game studio dedicated to crafting deeply immersive worlds. We specialize in creating immersive experiences so profound, players feel as if they are truly living within them.
      <br /><br />
      Our mission is to enrich lives and build a vibrant global community through our games. Since our founding in 2025, we have successfully launched our debut title,{' '}
      <a href="https://nyanpan.co/en" target="_blank" rel="noopener noreferrer" className="gameLink">
        <strong>&apos;NyanPan Co.&apos;</strong>
      </a>
      {' '}to a worldwide audience.
    </>
  ),
  ko: (
    <>
      드림볼은 깊은 몰입감을 선사하는 세계를 빚어내는 게임 스튜디오입니다. 저희는 플레이어가 마치 그 세계에 실제 사는 듯한, 깊이 있는 몰입 경험을 만드는 것을 전문으로 합니다.
      <br /><br />
      드림볼의 미션은 게임을 통해 플레이어의 삶을 풍요롭게 만들고, 활기 넘치는 글로벌 커뮤니티를 구축하는 것입니다. 저희는 2025년 설립 이후, 데뷔작{' '}
      <a href="https://nyanpan.co/ko" target="_blank" rel="noopener noreferrer" className="gameLink">
        <strong>&apos;냥빵냥빵 두근두근냥빵&apos;</strong>
      </a>
      을 글로벌 플레이어들에게 성공적으로 선보였습니다.
    </>
  ),
  jp: (
    <>
      ドリームボールは、深い没入感のある世界を生み出すゲームスタジオです。私たちは、プレイヤーがまるでその世界に本当に住んでいるかのような、奥深い没入体験を創り出すことを専門としています。
      <br /><br />
      ドリームボールのミッションは、ゲームを通じてプレイヤーの人生を豊かにし、活気あふれるグローバルコミュニティを築き上げることです。2025年の設立以来、デビュー作となる
      <a href="https://nyanpan.co/ja" target="_blank" rel="noopener noreferrer" className="gameLink">
        <strong>『ドキドキにゃんパン』</strong>
      </a>
      を、全世界のプレイヤーに向けて成功裏にリリースいたしました。
    </>
  ),
};

export default function Home() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState<"en" | "ko" | "jp">("en");

  useEffect(() => {
    // 테마가 변경될 때 body의 클래스를 직접 조작합니다.
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as "en" | "ko" | "jp");
  };

  return (
    <>
      <div className="container">
        <header className="header">
          <button onClick={toggleTheme} className="themeToggle">
            {theme === "light" ? "☀️" : "🌙"}
          </button>
          <select
            value={language}
            onChange={handleLanguageChange}
            className="languageSelector"
          >
            <option value="en">English</option>
            <option value="ko">한국어</option>
            <option value="jp">日本語</option>
          </select>
        </header>

        <main className="main">
          <div className="contentWrapper">
            <div className="logoWrapper">
              {/* 표준 HTML `<img>` 태그를 사용하도록 변경 */}
              <img
                src="/images/light-logo.png"
                alt="Dreamball Inc. Logo"
                className={`logo ${theme === 'light' ? 'visible' : 'hidden'}`}
              />
              <img
                src="/images/dark-logo.png"
                alt="Dreamball Inc. Logo Dark"
                className={`logo ${theme === 'dark' ? 'visible' : 'hidden'}`}
              />
            </div>
            <div className="introduction">
              {introductions[language]}
            </div>
          </div>
        </main>

        <footer className="footer">
          <p>© 2025 Dreamball Inc. All Rights Reserved.</p>
        </footer>
      </div>

      {/* 스타일 코드를 파일 내부에 포함시켰습니다. */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;700&display=swap');

        body {
          margin: 0;
          padding: 0;
          font-family: sans-serif;
          transition: background-color 0.4s ease, color 0.4s ease;
        }
        body.light {
          background-color: #ffffff;
          color: #000000;
        }
        body.dark {
          background-color: #121212;
          color: #ffffff;
        }
        * {
          box-sizing: border-box;
        }
        
        .container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          padding: 0 2rem;
        }
        .header {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 10;
        }
        .themeToggle {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1.8rem;
        }
        .languageSelector {
          background: transparent;
          color: inherit;
          border: 1px solid;
          border-radius: 8px;
          padding: 0.5rem 0.8rem;
          font-size: 1rem;
          cursor: pointer;
        }
        .languageSelector option {
          background-color: #fff;
          color: #000;
        }
        .main {
          flex-grow: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
        .contentWrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 800px;
          width: 100%;
        }
        .logoWrapper {
          position: relative;
          width: 100%;
          max-width: 400px;
        }
        .logoWrapper::before {
          content: '';
          display: block;
          padding-top: 100%;
        }
        .logo {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: opacity 0.4s ease-in-out;
        }
        .visible {
          opacity: 1;
        }
        .hidden {
          opacity: 0;
        }
        .introduction {
          font-family: 'Noto Serif KR', serif;
          font-size: 1.5rem;
          line-height: 1.6;
          margin-top: 2rem;
          max-width: 600px;
          word-break: keep-all;
        }
        .footer {
          width: 100%;
          padding: 2rem 0;
          text-align: center;
          font-size: 0.9rem;
          color: #888;
        }
        .gameLink {
          color: inherit;
          text-decoration: underline;
          transition: opacity 0.2s;
        }
        .gameLink:hover {
          opacity: 0.7;
        }
        @media (max-width: 768px) {
          .container {
            padding: 0 1rem;
          }
          .header {
            padding: 1rem;
          }
          .themeToggle {
            font-size: 1.5rem;
          }
          .languageSelector {
            font-size: 0.9rem;
          }
          .logoWrapper {
            max-width: 250px;
          }
          .introduction {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </>
  );
}