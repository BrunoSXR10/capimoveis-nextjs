
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
            <div className=" flex flex-col text-center bg-white ">
                {props.children}
            </div>

        </div>

    )
}