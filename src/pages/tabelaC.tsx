/* eslint-disable @next/next/no-html-link-for-pages */
import Navbar from "../components/Navbar";
import CardCorretor from "./bloc/corretor";

interface TabelaProps {
  corretor: CardCorretor;
}

export default function TabelaCorretor({ corretor }: TabelaProps) {
  function RenderData() {
    return (
    
      <>
        <div className="flex mx-14">
          <div className="flex bg-gray-200 border-black rounded-lg overflow-hidden shadow-lg shadow-gray-700">
            <div className="flex flex-row bg-gradient-to-r from-gray-400 to-gray-100">
              <div className="flex flex-col px-5 pt-3 pb-1 font-serif">
                <span className="pl-2 mb-2 mt-1 text-lg text-gray-900">
                  Nome: {corretor.nome}
                </span>
                <span className="pl-2 mb-2 text-md text-gray-900">
                  Creci: {corretor.creci}
                </span>
                <span className="pl-2 mb-2 text-md text-gray-900">
                  Telefone: {corretor.telefone}
                </span>
                {/* <span className="pl-2 mb-2 text-md text-gray-900">
                Email: {corretor.login}
              </span> */}
                <button className="flex flex-row px-3 py-1 my-1 bg-red-800 justify-center rounded-md text-gray-100 font-bold w-1/2">
                  Apagar
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return <>{RenderData()}</>;
}
