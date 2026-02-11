import Link from "next/link";
import Image from 'next/image'
import NavBar from "@/component/NavBar";
import { CgChevronLeft } from "react-icons/cg";
import { HiOutlineChevronLeft } from "react-icons/hi";


export const metadata = {
  title: 'Page Introuvable — BATIKA',
  description: 'The page you are looking for does not exist.',
};



export default function Custom404() {
  return (
    <div className="min-h-svh  w-full px-10 gap-5 sm:px-6 py-[40px] relative  flex flex-col items-center justify-center">
        <NavBar />

        
        <h1 className="md:text-[400px] text-center text-[calc(60vw-50px)] leading-[1.2]  font-semibold font-montreal tracking-[-20px] sm:flex hidden text-[#24313c]">404</h1>
        <p className="capitalize text-center bg-[#eeeeef] px-2 py-1 text-sm rounded-xs">Page Introuvable</p>
        <h5 className="sm:text-4xl text-3xl tracking-tight text-center">La page que vous cherchez s'est égarée dans nos chantiers.</h5>
        <p className="leading-none sm:text-md text-sm font-semibold text-center">Peut-être est-elle en cours de construction ?</p>

        <div className="pt-10 text-center">
          
            <Link href="/" className="sm:text-lg text-md border-dashed px-2.5 rounded shadow-gray py-2 border-[1px] border-gray flex items-center gap-1   text-gray hover:bg-[#24313c] hover:text-white tracking-[-.5px]  hover:text-darkk duration-200 ease-in-out"><HiOutlineChevronLeft /> Retour à l'accueil</Link>
        </div>
    </div>
  );
}