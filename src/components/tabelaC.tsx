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
        <th className="px-20 py-3 bg-gray-100 text-gray-600">Corretor</th>
        <th className="px-5 py-3 bg-gray-100 text-gray-600">CPF</th>
        <th className="px-5 py-3 bg-gray-100 text-gray-600">Imovéis Anunciados</th>
        <th className="px-5 py-3 bg-gray-100 text-gray-600">Ver</th>
      </tr>
    );
  }

  function renderData() {
    return props.corretor?.map((corretores, i) => {
    return (
      <tr key={corretores.creci} 
      className={`${i % 2 === 0 ? 'bg-white' : 'bg-white'} border-b border-gray-200`}>
        <td className="text-gray-600">{corretores.nome}</td>
        <td className="text-gray-600">{corretores.creci}</td>
        <td className="text-gray-600">{corretores.qtdImov}</td>
        <td className="text-gray-600">{renderAcao(corretores)}</td>
        
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
          className="border shadow-lg rounded-2xl "
        />
      )
    }
  return (
      <div className="flex flex-col-2">
        <table className="mt-16 ml-8 mb-16 shadow-2xl rounded-md overflow-hidden ">
            <thead className="">{renderCabecalho()}</thead>
            <tbody>{renderData()}</tbody>          
        </table>
        <div className= "flex ml-24 items-center">
          {caiu_na_vila_o_peixe_fuzila()}
        </div>
      </div>
  );
}