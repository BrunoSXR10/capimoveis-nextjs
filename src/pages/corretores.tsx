import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Card from "./card";
import TabelaCorretor from "./tabelaC";

export async function getStaticProps() {
  const data = await fetch("http://localhost:8080/imobiliario/corretores");

  const corretor = await data.json();

  console.log(corretor);

  return {
    props: { corretor },
  };
}

export default function CardPage({ corretor }) {
  return (
    <>
      <Navbar/>
      <Layout>
        <div className="h-screen">
          <div className="flex mt-16 justify-center">
            {corretor.map((item) => (
              <TabelaCorretor corretor={item} key={item.id} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
