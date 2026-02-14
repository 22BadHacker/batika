import Image from "next/image";
import Link from "next/link";
import Palms from '@/public/work/ss.gif'
import { VscArrowUp } from "react-icons/vsc";



// Add more images as needed

export default function Home() {



  return (
   <div className="w-full relative max-w-412.5 mx-auto pt-12 px-7 text-right pb-9 flex-col gap-2 min-h-svh h-auto flex justify-end items-end">
    <Link className="pb-4" href='/'>
      <Image src={Palms} alt='gif' className=' saturate-150 bottom-9 left-7 w-[300px] md:w-[320px]  object-cover '/>
    </Link>
    
    <div className="flex-col pt-5 gap-2">
        <h1 className="sm:text-4xl text-right leading-[.98] pb-3 text-3xl max-w-140 tracking-[-0.03em] ">
          Notre site est en cours de réalisation, merci pour votre patience.
        </h1>
        <h5 className='text-gray sm:leading-normal leading-[1.2]'>
          Pour plus d’informations, contactez-nous à{' '}
          <Link 
            className='border-b-[.5px] inline-flex border-b-gray font-semibold hover:text-orange flex italic items-center gap-1 border-dashed' 
            href='mailto:contact@batika.ma'
          >
            contact@batika.ma <VscArrowUp className='rotate-45 inline-flex'/>
          </Link>
        </h5>

    </div>


   </div>
  );
}