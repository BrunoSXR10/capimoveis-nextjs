import { useEffect, useState } from "react";
import CardImovel from "./bloc/imovel";
import Card from "./card";

export async function getStaticProps() {
  const data = await fetch ('http://localhost:8080/imobiliario/imoveis')

  const imovel = await data.json()

  console.log(imovel)

  return {
      props: {imovel},
  }
}

export default function CardPage( {imovel} ) {
    
    return (
      <div /* className="bg-[url('../../public/img/preto.jpg')] bg-no-repeat h-full bg-cover bg-center" */>
      <div className="flex flex-col-4 mt-16 justify-center">
      {imovel.map(item => <Card imovel={item} key={item.id} />)}
      </div>
    </div>
  );
}

