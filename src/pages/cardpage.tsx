import { useEffect, useState } from "react";
import CardImovel from "../../client/imovel";
import Card from "./card";

export async function getStaticProps() {
  const data = await fetch ('http://localhost:8080/imobiliario/clientes')

  const cliente = await data.json()

  console.log(cliente)

  return {
      props: {cliente},
  }
}

export default function CardPage( {cliente} ) {
    const [imoveis, setImoveis] = useState<CardImovel[]>()
    
    return (
      <div className="bg-gray-300">
      {/* <div className={`bg-gray-200
      text-gray-900 font-sans italic text-center text-2xl py-5`}>LISTA DE IMÓVEIS</div> */}
      <div className="flex flex-col-4 mt-16 justify-center">
      {cliente.map(item => <Card imovel={item} key={item.id} />)}
      </div>
    </div>
  );
}

