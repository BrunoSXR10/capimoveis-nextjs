import Image from "next/image";
import sos from "../../public/img/quien.png";

export default function Urso() {
  return (
    <div className="flex flex-col justify-center h-screen bg-gradient-to-t from-slate-100 to-blue-900">
      
       <Image
        className=""
        src={sos}
        alt="Putaria"
        width="350px"
        height="300px"
      /> 

    </div>
  );
}
