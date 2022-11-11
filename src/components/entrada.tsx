interface EntradaProps {
    tipo: string;
    valor: any;
    somenteLeitura?: boolean;
    valorMudou?: (valor: any) => void;
  }
  
  export default function Entrada(props: EntradaProps) {
    return (
      <div className="flex flex-col">
        <input 
          type={props.tipo} 
          value={props.valor}
          readOnly={props.somenteLeitura}
          onChange={(e) => props.valorMudou?.(e.target.value)}
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'  />
      </div>
    );
  }
  