import Link from "next/link";
import Image from 'next/image'
import NavBar from "@/component/NavBar";
import { CgChevronLeft } from "react-icons/cg";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { VscChevronLeft } from "react-icons/vsc";


export const metadata = {
  title: 'Page Introuvable — BATIKA',
  description: 'The page you are looking for does not exist.',
};



export default function Custom404() {
  return (
    <div className="min-h-svh pb-9 text-right w-full max-w-412.5 mx-auto  px-7 gap-5 sm:px-6 pt-[40px]  relative  flex flex-col items-end justify-end">
        {/* <NavBar /> */}

        
        {/* <div className="md:text-8xl leading-[.8] h-fit flex flex-col gap-2 pb-6 text-center text-[calc(45vw-50px)]   font-semibold font-montreal tracking-[-10px] sm:flex  text-[#24313c]">
            <span>4</span>
            <span>0</span>
            <span>4</span>
        </div> */}
        <p className="capitalize text-center bg-[#eeeeef] px-2 py-1 text-sm rounded-xs">Page Introuvable</p>
        <div className="flex items-start gap-0">
          <Link href={'/'} className='size-13  hover:scale-105 duration-200 ease-in-out border-gray text-gray-400 hover:rotate-45 text-3xl rounded-full flex items-center justify-center border-[1px]'><VscChevronLeft className="relative right-[1px]"/></Link>
          <h5 className="sm:text-4xl text-right leading-[1.1] py-1 text-3xl max-w-140 tracking-[-0.025em]">La page que vous cherchez s'est égarée dans nos chantiers.</h5>
        </div>
        <p className="leading-none sm:text-md text-sm font-semibold text-center">Peut-être est-elle en cours de construction ?</p>

        {/* <div className="pt-10 text-center">
          
            <Link href="/" className="sm:text-lg text-md  flex items-center gap-1   text-gray  tracking-[-.5px]  hover:text-orange duration-200 ease-in-out"><HiOutlineChevronLeft /> Retour à L'accueil</Link>
        </div> */}
    </div>
  );
}