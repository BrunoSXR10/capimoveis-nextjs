import { useState } from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import CardCorretor from "./bloc/corretor";
import TabelaCorretor from "./tabelaC";

export async function getStaticProps() {
  const data = await fetch("http://localhost:8080/imobiliario/corretores");

  const corretor = await data.json();

  console.log(corretor);

  return {
    props: { corretor },
  };
}

export default function Corretores({ corretor }) {
  return (
    <>
    <Navbar/>
      <Layout>
        <h1 className="flex justify-center text-3xl font-sans italic font-black mt-3">
          Corretores
        </h1>
        <div className="h-screen">
          <div className="flex mt-16 justify-center">
            {corretor.map((item) => (
              <TabelaCorretor corretor={item} key={item.id} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
