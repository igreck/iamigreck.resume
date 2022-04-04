import React from "react";

import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center p-8">
      <img
        className="shadow-lg rounded-full inline-block w-40 h-40 m-8"
        src={`https://picsum.photos/600?grayscale&random=4`}
        alt="logo"
      />
      <h1 className="font-bold text-gray-200 dark:text-gray-200 text-center text-3xl pt-4">
        <span className="font-sans">Salut, eu sunt </span>
        <span className="text-lime-400 dark:text-lime-400 text-5xl font-extrabold">
          @igreck
        </span>
      </h1>
    </header>
  );
};

export default Header;
