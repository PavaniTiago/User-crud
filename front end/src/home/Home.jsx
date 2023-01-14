import React from "react";
import { Header } from "../components/Header";
import { Nav } from "../components/Nav";
import { Main } from "../components/Main";

export const Home = (props) => {
  return (
    <Main title="Home" subtitle="Página de Cadastros de Usuários." >
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl font-semibold mb-4">Bem Vindo!</h1>
        <hr />
        <p className="text-xl font-thin mt-2">
          Sistema de construção de cadastro desenvolvido com React.
        </p>
      </div>
    </Main>
  );
};
