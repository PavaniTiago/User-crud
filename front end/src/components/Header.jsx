import React from "react";
import { AiFillHome } from "react-icons/ai";

export const Header = (props) => {
  return (
    <header className="flex justify-center flex-col h-auto py-5 w-auto px-6 bg-stone-100 shadow-lg">
      <h1 className="text-3xl font-semibold flex mb-2"> 
        {props.title}
      </h1>
      <p className="text-xl font-normal">{props.subtitle}</p>
    </header>
  );
};
