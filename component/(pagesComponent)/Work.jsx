import React from 'react'
import Image from 'next/image'
import maree from '@/public/work/maree.webp'


const Work = () => {
  return (
    <div className='pt-60 pb-15 gap-10 min-h-svh h-auto  grid grid-cols-2 w-full'>
      <div className="w-full grid grid-cols-1 gap-6 ">
           <div className="w-full h-full object-cover">
                <Image src={maree} alt='' className='w-full h-full  object-cover'/>
            </div>
      </div>


        <div className="w-full h-full sticky bottom-0 right-0 items-end flex justify-end text-right">
            <p className='max-w-125 text-darkkk text-pretty text-[22px] font-semibold leading-[1.1]'><span className='inline-flex uppercase font-montreal tracking-[-.25px] text- pr-8 relative -top-0.75 text-sm font-medium'>( Réalisations )</span>Chaque réalisation BATIKA est le résultat d’une collaboration étroite, d’un savoir—faire maîtrisé et d’un engagement constant envers la qualité.</p>
        </div>


        {/* <div className="grid grid-cols-2 gap-6 w-full pt-20">
            <div className="w-full h-full object-cover">
                <Image src={maree} alt='' className='w-full h-[800px] object-cover'/>
            </div>
            <div className="w-full h-fit object-cover">
                <Image src={maree} alt='' className='w-full h-full object-cover'/>
            </div>
        </div> */}
    </div>
  )
}

export default Work
