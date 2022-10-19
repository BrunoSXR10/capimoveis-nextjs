import { useEffect, useState } from "react";
import Navbar from "../src/components/navbar";

export default function Estado () {

    const [count, setCount] = useState(0);

    return(
       <>
        <Navbar/>
        <div>{count}</div>
        <button className="bg-indigo-700 rounded-md font- text-white px-2 py-1" onClick={() => setCount(count + 1)}>Incrementar</button>
       </> 
    )

}