const GlobalStyle = () => {
  return (
    <style jsx global>{`
      body {
        font-family: "IBM Plex Serif", serif;
        margin: 0;
        padding: 20px;
        background: #fafafa;
        color: #333;
      }

      @media screen and (min-width: 768px) {
        body {
          padding: 50px;
        }
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
