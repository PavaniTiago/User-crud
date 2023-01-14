import React from "react";

export const Footer = () => {
  return (
    <footer className="flex justify-center w-auto">
      <p className="text-lg">
        Desenvolvido por @
        <a
          href="https://github.com/PavaniTiago"
          target="_blank"
          className="hover:text-sky-600 hover:underline transition-colors"
        >
          Tiago Pavani
        </a>
        .
      </p>
    </footer>
  );
};
