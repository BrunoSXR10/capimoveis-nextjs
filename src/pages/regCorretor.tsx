import axios from "axios";
import { useState } from "react";
import Entrada from "../components/entrada";
import CardCorretor from "./bloc/corretor";

export default function RegCorretor() {
  const [nomeCorretor, setNomeCorretor] = useState("");
  const [creci, setCreci] = useState("");
  const [email, setemail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");

  async function Submit(evento: React.FormEvent<HTMLFormElement>){
    evento.preventDefault();   
      const calvo = await fetch("http://localhost:8080/imobiliario/corretor")
      
  };

  return (
    <>
      <form onSubmit={Submit}>
        <input
          type="text"
          value={nomeCorretor}
          onChange={(evento) => setNomeCorretor(evento.target.value)}
        />
        <input
          placeholder="creci"
          type="number"
          value={creci}
          onChange={(evento) => setCreci(evento.target.value)}
        />
        <input
          placeholder="email"
          type="text"
          value={email}
          onChange={(evento) => setemail(evento.target.value)}
        />
        <input
          placeholder="telefone"
          type="text"
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
        />
        <input
          placeholder="cpf"
          type="text"
          value={cpf}
          onChange={(evento) => setCpf(evento.target.value)}
        />
        <button
          className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          type="submit"
        >
          Save
        </button>
      </form>
    </>
  );
}
