import React from "react";

export const Accessibility = () => {
  return (
    <>
      <a href="#main" tabIndex={0}>
        Skip to main content
      </a>

      <style jsx>
        {`
          a {
            position: absolute;
            top: 0;
            left: 0;
            padding: 10px 20px;
            background: #444;
            transform: translateX(-100%);
          }

          a:focus {
            transform: translateX(0);
          }
        `}
      </style>
    </>
  );
};
