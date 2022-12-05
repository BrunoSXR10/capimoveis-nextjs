import Image from "next/image";
import CardImovel from "../../client/imovel";
import image from "../../public/img/casa.jpeg"

interface CardProps {
    imovel: CardImovel
}

export default function Card( {imovel}: CardProps) {
  return (
    <div className="h-screen flex flex-col mx-14">
      <div className="flex flex-col bg-gray-200 border-black rounded-lg shadow-lg shadow-gray-700">

      <Image
      className="border-black rounded-t-lg "
      src={image}
      alt='card'
      width={270}
      height={180}>
      </Image>

    <div className="flex flex-row">
      <div className="flex flex-col">
        <span className='pl-2 mb-2 mt-1 text-lg text-gray-600 font-bold'> {imovel.cpf} </span>
        <span className='pl-2 mb-2 text-sm text-gray-600'> {imovel.email} </span>
        <span className='pl-2 mb-2 text-md text-gray-600'> {imovel.nome} </span>
      </div>
      <div className="flex">
        <button className="flex flex-row px-3 py-1 absolute ml-14 mt-16 bg-indigo-800 justify-center rounded-md text-gray-300 font-bold">ver</button>
      </div>
    </div>

      </div>
    </div>
  );
}
