import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <section className="flex h-full items-center justify-center">
        <div className="px-15 max-w-120 mx-auto flex w-full flex-col justify-center gap-4 rounded-2xl text-center">
          <h1 className="text-3xl font-bold"> Faça seu login </h1>

          <form className="flex w-full flex-col gap-2">
            <input
              className="w-full rounded-full border border-gray-300 px-4 py-2"
              type="email"
              placeholder="Digite seu Email"
            ></input>
            <input
              className="w-full rounded-full border border-gray-300 px-4 py-2"
              type="password"
              placeholder="Digite sua Senha"
            ></input>
            <button className="bg-primary-400 w-full cursor-pointer rounded-full border border-gray-300 px-4 py-2 font-semibold text-white">
              {" "}
              Login{" "}
            </button>
          </form>

          <p>
            {" "}
            Ainda não tem conta?{" "}
            <Link to="/register" className="font-semibold underline">
              {" "}
              Registre-se Aqui{" "}
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Login;
