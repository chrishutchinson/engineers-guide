import { colors } from "../utils/theme";

const GlobalStyle = () => {
  return (
    <style jsx global>{`
      html {
        background: #fff;
      }

      @media (prefers-color-scheme: dark) {
        html {
          background: #111;
        }
      }

      body {
        font-family: "IBM Plex Serif", serif;
        background: #fff;
        margin: 0;
        padding: 20px;
        background: #fafafa;
        color: #333;
      }

      @media (prefers-color-scheme: dark) {
        body {
          background: #111;
          color: #fff;
        }
      }

      @media screen and (min-width: 768px) {
        body {
          padding: 50px;
        }
      }

      a {
        text-decoration-thickness: 2px;
        position: relative;
        color: ${colors.light.primary};
      }

      @media (prefers-color-scheme: dark) {
        a {
          color: ${colors.dark.primary};
        }
      }

      a.external:after {
        content: " ↗";
      }

      a:focus,
      a:hover,
      a:active {
        color: ${colors.light.secondary};
      }

      @media (prefers-color-scheme: dark) {
        a:focus,
        a:hover,
        a:active {
          color: ${colors.dark.secondary};
        }
      }

      a:before {
        content: "↓";
        display: none;
        position: absolute;
        top: -1.1em;
        left: 0;
      }

      a:focus:before {
        display: block;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: "IBM Plex Mono", Helvetica;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        margin: 0;
      }
    `}</style>
  );
};

export default GlobalStyle;
