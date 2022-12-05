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
import CardPage from "./cardpage";

export async function getStaticProps() {
  const data = await fetch ('http://localhost:8080/imobiliario/clientes')

  const cliente = await data.json()

  console.log(cliente)

  return {
      props: {cliente},
  }
}

export default function Home( {cliente} ) {

  return (
    <>
      <Layout>
        <Navbar/>
        <Login/>
        <CardPage cliente={cliente}/>
        <Footer/>
      </Layout>
    </>
  );
}
