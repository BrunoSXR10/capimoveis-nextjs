/* eslint-disable @next/next/no-img-element */
import { render } from "@headlessui/react/dist/utils/render";
import Image from "next/image";
import TypeCorretor from "../../client/corretor";
import capivaragif from "../../public/img/capgif.gif";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import Footer from "../components/footer";


interface LoginProps {}

export default function Login(props: LoginProps) {
  function renderLogin() {
    return (
      <div className="">
        <div className="flex px-16 py-14 mb-96 bg-gray-100 bg-opacity-50 rounded-lg shadow-2xl">
          <div className=" space-y-8 ">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-900 to-slate-800">
                Entre na sua conta
              </h2>
            </div>
            <form className=" space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="-space-y-px rounded-md shadow-lg opacity-75">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email-address"
                    /* name="email" */
                    type="email"
                    autoComplete="email"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border bg-gray-50 border-gray-400 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Senha
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-b-md border bg-gray-50 border-gray-400 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between flex-col">
                <div className="flex items-center pb-2">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-900 focus:ring-0 "
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Lembre de mim
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-indigo-900 hover:text-indigo-500"
                  >
                    Esqueceu sua senha?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-gradient-to-r from-indigo-900 via-black to-slate-800 py-2 px-4 text-sm font-md text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 opacity-90"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <LockClosedIcon
                      className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                      aria-hidden="true"
                    />
                  </span>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  const caiu_na_vila_o_peixe_fuzila = () => {
    return (
      <Image
        src={capivaragif}
        alt="Picture of the author"
        width="350px"
        height="300px"
        className="border shadow-lg rounded-2xl"
      />
    );
  };

  return (
    <>
      <div className="flex mx-60 my-28 justify-end items-center">
        <div className="">{renderLogin()}</div>
      </div>
    </>
  );
}
