import Image from "next/image";
import CardImovel from "./bloc/imovel";
import image from "../../public/img/casa.jpeg";

interface CardProps {
  imovel: CardImovel;
}

export default function Card({ imovel }: CardProps) {
  return (
    <div className="h-screen flex flex-col mx-14">
      <div className="flex flex-col bg-gray-200 border-black rounded-lg shadow-lg shadow-gray-700">
        <Image
          className="border-black rounded-t-lg "
          src={image}
          alt="card"
          width={270}
          height={180}
        ></Image>

        <div className="flex flex-row bg-gradient-to-r from-purple-700 to-indigo-700">
          <div className="flex flex-col">
            <span className="pl-2 mb-2 mt-1 text-lg text-gray-200">
              {" "}
              Valor do Imóvel: {imovel.valorImovel} R$
            </span>
            <span className="pl-2 mb-2 text-md text-gray-200">
              Quartos: {imovel.quartos}{" "}
            </span>
            <span className="pl-2 mb-2 text-md text-gray-200">
              Área: {imovel.areaTotal} m²{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
