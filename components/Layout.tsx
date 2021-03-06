import Link from "next/link";

import { getTheme } from "../utils/theme";

import GlobalStyle from "./GlobalStyle";
import { Accessibility } from "./Accessibility";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Accessibility />

      <main>
        <header>
          <h1>
            <Link href="/">
              <a>An Engineer's Guide to...</a>
            </Link>
          </h1>
        </header>

        {children}
      </main>

      <footer>
        &copy; {new Date().getFullYear()} ~{" "}
        <a href="https://www.twitter.com/_engineersguide" className="external">
          Twitter
        </a>{" "}
        |{" "}
        <a
          href="https://www.github.com/chrishutchinson/engineers-guide"
          className="external"
        >
          GitHub
        </a>
      </footer>

      <style jsx>{`
        main {
          --left-border-width: 14px;
          background: #fff;
          padding: 20px 20px 20px calc(20px + var(--left-border-width));
          border: 1px dashed #3a3a3a;
          max-width: 960px;
          margin: 0 auto;
          box-shadow: 5px 5px 0px #333,
            inset var(--left-border-width) 0 ${getTheme("light").colors.primary};
        }

        @media (prefers-color-scheme: dark) {
          main {
            background: #333;
            box-shadow: 5px 5px 0px #555,
              inset var(--left-border-width) 0
                ${getTheme("dark").colors.primary};
          }
        }

        @media screen and (min-width: 768px) {
          --left-border-width: 14px;

          main {
            padding: 50px 20px 20px calc(20px + var(--left-border-width));
          }
        }

        header {
          margin-bottom: 40px;
        }

        header h1 {
          // text-transform: uppercase;
          letter-spacing: 3px;
          font-weight: 400;
          font-size: 38px;
          max-width: 400px;
          line-height: 1em;
          margin-bottom: 10px;
        }

        header h1 a {
          text-decoration: none;
        }

        @media screen and (min-width: 768px) {
          header h1 {
            font-size: 58px;
          }
        }

        nav {
          display: flex;
          flex-direction: row;
          align-items: center;
          position: relative;
        }

        nav:after {
          content: "";
          background: rgb(255, 255, 255);
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 1) 100%
          );
          width: 30px;
          height: 100%;
          position: absolute;
          right: 0;
          top: 0;
          pointer-events: none;
        }

        @media (prefers-color-scheme: dark) {
          nav:after {
            background: rgb(20, 20, 20);
            background: linear-gradient(
              90deg,
              rgba(20, 20, 20, 0) 0%,
              rgba(20, 20, 20, 1) 100%
            );
          }
        }

        nav ul {
          display: flex;
          flex-direction: row;
          flex-wrap: no-wrap;
          list-style-type: none;
          margin: 0;
          padding: 0;
          overflow: scroll;
          padding-right: 30px;
        }

        @media screen and (min-width: 768px) {
          nav ul {
            overflow: hidden;
          }
        }

        nav ul li {
          display: inline;
          margin-right: 15px;
          flex: 0 0 auto;
        }

        nav ul li:last-of-type {
          padding-right: 30px;
        }

        nav h2 {
          line-height: 1em;
          font-size: 18px;
          padding-right: 15px;
          margin-right: 15px;
          border-right: 1px solid #333;
        }

        footer {
          text-align: center;
          padding: 50px;
        }
      `}</style>
    </>
  );
};

export default Layout;
