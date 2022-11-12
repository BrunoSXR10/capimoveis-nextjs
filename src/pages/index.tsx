/* eslint-disable @next/next/no-img-element */
import Navbar from "../components/Navbar";
import TabelaCorretor from "../components/tabelaC";
import TypeCorretor from "../../client/corretor";
import Layout from "../components/Layout";
import Footer from "../components/footer";
import Login from "./login";
import React, { useEffect, useState } from "react";
import RegCorretor from "./regCorretor";
import { rato } from "../components/icons";
import TypeImovel from "../../client/imovel";

export default function Home() {
  // const [cliente, setCliente] = useState<TypeCorretor>(TypeCorretor.vazio());
  // const [corretores, setCorretor] = useState<TypeCorretor[]>([]);
  // const [visivel, setVisivel] = useState<"table" | "form">("table");

  // function salvarCorretor() {
  //   setVisivel("table");
  // }

  // function trabalho() {
  //   setVisivel("form");
  // }

  // const pessoas = [
  //   new TypeCorretor('bruno souza', '061.489.555-39', 'bruno', 2)
  // ]

  // const imoveis = [
  //    new TypeImovel() 
  // ]

  return (
    <>
      <Layout>
        <Navbar/>
        <Login/>
        {/* {visivel === "table" ? (
          <div>
            <TabelaCorretor corretor={pessoas}
            />
          </div>
        ) : (
          <>
            <RegCorretor corretor={undefined} corretorMudou={salvarCorretor} />
          </>
        )} */}
        <Footer/>
      </Layout>
    </>
  );
}
