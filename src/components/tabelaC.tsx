import { render } from "@headlessui/react/dist/utils/render";
import Image from "next/image";
import TypeCorretor from "../../client/corretor";
import { imoveis } from "./icons";
import sos from "../../public/img/quien.jpg";
import bg1 from "../../public/img/img1.jpg";

interface TabelaProps {
  corretor?: TypeCorretor[];
  apagarCadastro?: (corretor: TypeCorretor) => void;
  editarCadastro?: (corretor: TypeCorretor) => void;
  addImov?: (corretor: TypeCorretor) => void;
  affsvida?: () => void;
}

export default function TabelaCorretor(props: TabelaProps) {
  function renderCabecalho() {
    return (
      <>
      <tr className="">
        <th className=" py-3 px-7 bg-gray-100 text-gray-600">Corretor</th>
        <th className=" py-3 px-7 bg-gray-100 text-gray-600">Creci</th>
        <th className=" py-3 px-5 bg-gray-100 text-gray-600">Imovéis</th>
        <th className=" py-3 px-5 bg-gray-100 text-gray-50"> <button className="bg-purple-800 px-2 rounded-md"> Add New </button> </th>
      </tr>
      </>
    );
  }

  function renderData() {
    return props.corretor?.map((corretores, i) => {
      return (
        <>
        <tr
        key={corretores.creci}
        className={`${
            i % 2 === 0 ? "bg-white" : "bg-white"
          } border-b border-gray-200`}
          >
          <td className="px-4 text-gray-600">{corretores.nome}</td>
          <td className="px-4 text-gray-600">{corretores.creci}</td>
          <td className="text-gray-600">{corretores.qtdImov}</td>
          <td className="text-gray-600">{renderAcao(corretores)}</td>
        </tr>
        </>
      );
    });
  }

  function renderAcao(corretor: TypeCorretor) {
    return (
      <td className="w-1/3">
        <button
          className="text-indigo-800 rounded-xl p-2 m-1 hover:bg-white"
          onClick={() => props.apagarCadastro?.(corretor)}
        >
          {imoveis}
        </button>
      </td>
    );
  }

  const caiu_na_vila_o_peixe_fuzila = () => {
    return (
      <>
        {/* <Image
          src={sos}
          alt="Picture of the author"
          width="350px"
          height="300px"
          className="border shadow-lg rounded-2xl "
        /> */}
      </>
    );
  };
  return (
    <div className="bg-[url('../../public/img/img3.jpg')] bg-no-repeat h-screen bg-cover bg-bottom">
      <div className="flex">
        <table className="mt-16 ml-16 mb-16 shadow-2xl rounded-md overflow-hidden ">
          <thead className="">{renderCabecalho()}</thead>
          <tbody>{renderData()}</tbody>
        </table>
      </div>
    </div>
  );
}
