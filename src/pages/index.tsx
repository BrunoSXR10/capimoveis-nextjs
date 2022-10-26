import Navbar from "../components/Navbar";
import TabelaCorretor from "../components/tabela";
import TypeCorretor from "../../client/corretor";
import Layout from "../components/Layout";
import Footer from "../components/footer";

export default function Example() {

  const corretores = [
    new TypeCorretor('garrafa', '061.489.555-39', 'garrafa@gmail', +2),
    new TypeCorretor('pintor', '932.378.875-49', 'pintor@gmail', +6),
    new TypeCorretor('MAURICIO PURPURINA', '932.378.875-49', 'pintor@gmail', +6),
    new TypeCorretor('MAURICIO PURPURINA', '932.378.875-49', 'pintor@gmail', +6),
    new TypeCorretor('MAURICIO PURPURINA', '932.378.875-49', 'pintor@gmail', +6),
    new TypeCorretor('MAURICIO PURPURINA', '932.378.875-49', 'pintor@gmail', +6),

  ]
  
  return (

    <div>
      <Navbar/>
      <Layout>

      {/* <TabelaAnunciar/> */}
      <TabelaCorretor corretor={corretores}/>
        
      </Layout>
      <Footer/>
      
    </div>
  )
}
