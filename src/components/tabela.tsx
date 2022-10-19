import Image from "next/image";
import TypeCorretor from "../../client/corretor";
import capivara2 from '../../public/img/hahaha.png'

interface TabelaProps {
  corretor?: TypeCorretor[];
}

export default function TabelaCorretor(props: TabelaProps) {

  function renderCabecalho() {
    return (
      <tr className="">
        <th className="px-20">Corretor</th>
        <th className="px-5">CPF</th>
        <th className="px-5">Imovéis Anunciados</th>
        <th className="px-5">HAHAHA</th>
      </tr>
    );
  }

  function renderData() {
    return props.corretor?.map((corretores, i) => {
    return (
      <tr key={corretores.creci} className="bg-gray-100">
        <td>{corretores.nome}</td>
        <td>{corretores.creci}</td>
        <td>{corretores.qtdImov}</td>
        <td>{}</td>
      </tr>
    )
    })
}

    const caiu_na_vila_o_peixe_fuzila = () => {
      return (
        <Image
          src={capivara2}
          alt="Picture of the author"
          width="350px"
          height="300px"
        />
      )
    }
  return (
      <div className="justify-content grid grid-cols-2">
        <table className="mt-16 ml-12 border rounded-xl overflow-hidden">
            <thead className="bg-gradient-to-r from-indigo-700 via-purple-500 to-slate-800 text-gray-200">{renderCabecalho()}</thead>
            <tbody>{renderData()}</tbody>          
        </table>
        <div className="mt-16">
          {caiu_na_vila_o_peixe_fuzila()}
        </div>
      </div>
  );
}