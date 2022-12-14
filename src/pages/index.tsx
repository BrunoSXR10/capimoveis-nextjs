/* eslint-disable @next/next/no-img-element */
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import Footer from "../components/footer";
import Login from "./login";
import React, { useEffect, useState } from "react";

import CardPage from "./cardpage";

export async function getStaticProps() {
  const data = await fetch ('http://localhost:8080/imobiliario/imoveis')

  const imoveis = await data.json()

  console.log(imoveis)

  return {
      props: {imoveis},
  }
}

export default function Home( {imoveis} ) {

  return (
    <>
      <Layout>
        <Navbar/>
        <Login/>
        <CardPage imovel={imoveis}/>
        <Footer/>
      </Layout>
    </>
  );
}
