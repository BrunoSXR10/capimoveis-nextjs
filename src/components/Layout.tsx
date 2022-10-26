
interface LayoutProps{
Titulo?: string
children?: any
}

export default function Layout(props: LayoutProps) {

    return(
        <div className={`
        flex flex-col
        bg-white text-gray-900 rounded-md
        `}>
           <h1> {props.Titulo} </h1>         
            <div className=" flex flex-col text-center py-2 px-3 bg-gradient-to-b from-slate-100 via-slate-300 to-indigo-900 h-screen">
                {props.children}
            </div>

        </div>

    )
}