import { useEffect, useState } from "react";


export default function Integracao () {
  
  const [codigo, setCodigo] = useState(1) 
  const [cliente, setCliente] = useState({})

 function obterUser() {
     fetch(`http://localhost:3000/api/${codigo}`)
     .then (resp => resp.json())
     .then (dados => setCliente(dados))
   }
  
  return (

    <>

      <input type="number" value={codigo}
       onChange={e => setCodigo(e.target.value)} />
      <button onClick={obterUser}>Obter</button>
      <ul>
        <li>id: {cliente.id} </li>
        <li>nome: {cliente.name}</li>
      </ul>

    </>

  );
}
