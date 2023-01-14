import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { Link } from 'react-router-dom'

export const Nav = (props) => {
  return (
    <aside className="flex h-full w-44 px-10 bg-slate-800">
      <nav className="flex flex-col mt-12">
        <Link
          to="/"
          className="flex items-center h-12 w-auto text-gray-200 text-xl  hover:underline transition-colors mb-2"
        >
          <AiFillHome className="mr-2" />
          Home
        </Link>
        <hr />
        <Link
          to="/users"
          className="flex items-center h-12 w-auto text-gray-200 mt-2 text-xl  hover:underline transition-colors"
        >
          <FaUsers className="mt-[2px] mr-2" />
          Usuários
        </Link>
      </nav>
    </aside>
  );
};
