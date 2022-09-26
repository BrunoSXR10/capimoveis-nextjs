import Link from "../components/link";
import buscaEndereco from "./api/abelha";

const announcement = () => (
  <>
    <div>
      
      <div className=" md:gap-6 bg-gradient-to-r from-purple-400 to-blue-600">
        <div className="md:col-span-1 flex text-center justify-center">
          <div className="px-4 sm:px-0 md:mt-6">
            <h3 className="text-2xl font-black text-black">
              Cadastro de Imóvel
            </h3>
            <p className="mt-1 text-2lg text-black-600">
              Preencha o formulario para cadastrar seu imóvel na nossa
              plataforma
            </p>
          </div>
        </div>
        <div className="md:mt-10 md:col-span-2 md:mt-0 w-3/5 ml-60">
          <form action="#" method="POST">
            <div className="shadow sm:overflow-hidden rounded-lg shadow-2xl">
              <div className="space-y-6 bg-gray-100 px-4 py-5 sm:p-6" >
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="company-website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Link
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                        http://
                      </span>
                      <input
                        type="text"
                        name="company-website"
                        id="company-website"
                        className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Descrição
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="about"
                      name="descricao"
                      rows={3}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Sobre o Imóvel..."
                      defaultValue={""}
                    />
                  </div>

                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Adcionar imagens
                  </label>
                  <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-grey-100 font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Enviar arquivo</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">ou arraste aqui</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG até 10MB
                      </p>
                    </div>
                  </div>
                </div> 

                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="Preço" className="block text-sm font-medium text-gray-700">
                        Valor
                      </label>   
                      <div className="mt-1 flex rounded-md shadow-sm">
                      <input 
                        type="text"
                        name="Valor"
                        id="Valor"
                        autoComplete="Valor"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                      
                </div> 
                <div className="grid grid-cols-6 gap-6">
                    
                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        Categoria
                      </label>
                      <select
                        id="Categoria"
                        name="Categoria"
                        autoComplete="Categoria"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option>Apartamento</option>
                        <option>Casa</option>
                        <option>Falt</option>
                        <option>Conjugado</option>
                        <option>Studio</option>
                        <option>Terreno</option>
                        <option>Sobrado</option>
                        <option>Loft</option>
                        <option>Galpão</option>
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                        Status
                      </label>
                      <select
                        id="Status"
                        name="Status"
                        autoComplete="Status"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option>Disponível</option>
                        <option>Vendido</option>
                        <option>Alugado</option>
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                        Finalidade
                      </label>
                      <select
                        id="Finalidade"
                        name="Finalidade"
                        autoComplete="Finalidade"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option>Venda</option>
                        <option>Aluguel</option>
                      </select>
                    </div>
                  </div>

                    <div className="grid grid-cols-6 gap-6">

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                        CEP
                      </label>
                      <input 
                        type="text"
                        name="CEP"
                        id="CEP"
                        autoComplete="CEP"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                      
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                        Estado
                      </label>
                      <input 
                        type="text"
                        name="Estado"
                        id="Estado"
                        autoComplete="Estado"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                        Cidade
                      </label>
                      <input 
                        type="text"
                        name="Cidade"
                        id="Cidade"
                        autoComplete="Cidade"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                      </div>
                    </div>

                  <div className="grid grid-cols-6 gap-6">

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                        Bairro
                      </label>
                      <input 
                        type="text"
                        name="Bairro"
                        id="Bairro"
                        autoComplete="Bairro"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                      
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                        Número
                      </label>
                      <input 
                        type="text"
                        name="Número"
                        id="Número"
                        autoComplete="Número"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                        Complemento
                      </label>
                      <input 
                        type="text"
                        name="Complemento"
                        id="Complemento"
                        autoComplete="Complemento"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                      </div>
                    </div>
                    <div className="col-span-6">
                      <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                        Endereço
                      </label>
                      <input
                        type="text"
                        name="Endereço"
                        id="Endereço"
                        autoComplete="Endereço"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>


                  <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-gradient-to-r from-purple-400 to-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Salvar
                </button>
                  </div>
                </div>     
              
          </form>
          </div>
        </div>
      </div>
    
  </>
);

export default announcement;

{
  /* <select
  className="bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded focus:outline-none focus:bg-white focus:border-gray-500"
  id="grid-state"
>
  <option>New Mexico</option>
  <option>Missouri</option>
  <option>Texas</option>
</select>; */
}
