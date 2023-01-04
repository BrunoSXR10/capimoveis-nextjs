import Image from "next/image";
import sos from "../../public/img/quien.jpg";

export default function Urso() {
  return (
    <div className="flex flex-col justify-center h-screen bg-gradient-to-t from-slate-100 to-blue-900">
      

       <input type="text" placeholder="busca"/>

       {/* <Image
        className="affsvida"
        src={sos}
        alt="12"
        width="350px"
        height="300px"
      />  */}

    </div>
  );
}
