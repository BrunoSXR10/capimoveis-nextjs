import axios from "axios"
import { useEffect, useState } from "react"
import CardImovel from "../../client/imovel"
import Card from "./card"

  export async function getStaticProps() {
  const data = await fetch ('http://localhost:8080/imobiliario/clientes')

  const cliente = await data.json()

  console.log(cliente)

  return {
      props: {cliente},
  }
}

export default function Fudido( {cliente} ) {

  const [imoveis, setImoveis] = useState<CardImovel[]>() 

    /* useEffect(() => {
      axios.get<CardImovel[]>(`http://localhost:8080/imobiliario/clientes`)
        .then(resp => {
          setImoveis(resp.data)
        })
    }, []) */


    
    return (
      <>
      <div>
        {cliente.map(item => <Card imovel={item} key={item.id} />)}
        <ul>
          {cliente.map((item) => (
            <li key={item.id}>
              {item.nome}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}