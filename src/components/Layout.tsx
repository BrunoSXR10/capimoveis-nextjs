
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
            <div className="  bg-[url('../../public/img/img5.jpg')] bg-no-repeat h-full bg-cover bg-center flex flex-col bg-white ">
                {props.children}
            </div>

        </div>

    )
}