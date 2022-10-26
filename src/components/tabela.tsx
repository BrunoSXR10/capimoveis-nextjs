import { render } from "@headlessui/react/dist/utils/render";
import Image from "next/image";
import TypeCorretor from "../../client/corretor";
import capivaragif from '../../public/img/capgif.gif'
import { editar, lixo } from "./icons";

interface TabelaProps {
  corretor?: TypeCorretor[];
  apagarCadastro?: (corretor : TypeCorretor) => void
  editarCadastro?: (corretor : TypeCorretor) => void
  addImov?: (corretor : TypeCorretor) => void
}

export default function TabelaCorretor(props: TabelaProps) {

  function renderCabecalho() {
    return (
      <tr className="">
        <th className="px-20">Corretor</th>
        <th className="px-5">CPF</th>
        <th className="px-5">Imovéis Anunciados</th>
        <th className="px-5">Ver</th>
      </tr>
    );
  }

  function renderData() {
    return props.corretor?.map((corretores, i) => {
    return (
      <tr key={corretores.creci} 
      className={`${i % 2 === 0 ? 'bg-gray-200' : 'bg-gray-100'}`}>
        <td className="font-mono">{corretores.nome}</td>
        <td className="font-mono">{corretores.creci}</td>
        <td className="font-mono">{corretores.qtdImov}</td>
        <td className="">{renderAcao(corretores)}</td>
        
      </tr>
    )
    })
}

  function renderAcao(corretor : TypeCorretor) {
    return(
      <td className="w-1/3">
          <button className="text-blue-700 rounded-xl p-2 m-1 hover:bg-white"
          /* onClick={() => props.editarCadastro?.(corretor)} */
          onClick={() => props.addImov?.(corretor)}>
              {editar}</button>
          <button className="text-blue-500 rounded-xl p-2 m-1 hover:bg-white"
          onClick={() => props.apagarCadastro?.(corretor)}>
              {lixo}</button>

      </td>
  )
  }

    const caiu_na_vila_o_peixe_fuzila = () => {
      return (
        <Image
          src={capivaragif}
          alt="Picture of the author"
          width="350px"
          height="300px"
          className="border shadow-lg rounded-2xl"
        />
      )
    }
  return (
      <div className="flex flex-col-2">
        <table className="mt-16 ml-8 border rounded-md overflow-hidden">
            <thead className="bg-gradient-to-t from-slate-700 to-black text-gray-200">{renderCabecalho()}</thead>
            <tbody>{renderData()}</tbody>          
        </table>
        <div className= "ml-40 mt-20">
          {caiu_na_vila_o_peixe_fuzila()}
        </div>
      </div>
  );
}