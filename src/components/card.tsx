import Image from "next/image";
import CardImovel from "../../client/imovel";
import image from "../../public/img/img2.jpg"

// ${props.lugak.titulo}
interface CardProps {
    cafofo: CardImovel
}

export default function Card(props: CardProps) {
  return (
    <div className="h-screen flex flex-col justify-center items-center ">
      <div className="flex flex-col bg-gray-200 border-black rounded-lg shadow-lg shadow-gray-900">

      <Image
      className="border-black rounded-t-lg "
      src={image}
      alt='kk'
      width={270}
      height={180}>

      </Image>
      <span className='pl-2 mb-2 mt-1 text-lg text-gray-600 font-bold'>{`R$ ${props.cafofo.preco}`}{/* {props.lugak.titulo} */}</span>
      <span className='pl-2 mb-2 text-sm text-gray-600'>{props.cafofo.descricao}</span>
      <span className='pl-2 mb-2 text-md text-gray-600'>{props.cafofo.local}</span>

      </div>
    </div>
  );
}
