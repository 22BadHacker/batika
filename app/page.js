import Image from "next/image";
import Batika from '@/public/Logo/Batika_logo.svg';

export default function Home() {
  return (
   <div className="relative min-h-screen flex justify-center items-center h-auto">
      <Image src={Batika} alt='' className='w-[170px] z-10 object-cover'/>
      <div className="size-[260px] z-[2] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" stroke="#c4c4c4"><g fill="none" fill-rule="evenodd" stroke-width="1"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/><animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/><animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/></circle></g></svg></div>
   </div>
  );
}

// Lotissement Assakane Al Anik Quartier El Omariya, N° 11 4 Éme Étage Ain Chock - Aîn-Chock (AR)
