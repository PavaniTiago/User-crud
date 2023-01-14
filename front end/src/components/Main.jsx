import React from "react";
import { Header } from "./Header";

export const Main = (props) => {
  return (
    <>
    <Header {...props}/>
        <main className="flex flex-col justify-center items-center">
          <div className="mt-12 bg-stone-100 shadow-xl p-14 rounded">
            {props.children}
          </div>
        </main>
    </>
  );
};
