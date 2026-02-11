import React from 'react'
import Image from 'next/image'
import maree from '@/public/work/maree.webp'


const Work = () => {
  return (
    <div className='pt-70'>
        {/* <h1 className='text-7xl text-darkkk font-semibold capitalize tracking-[-1px] '>Réalisations</h1> */}
        <div className="w-full flex justify-end text-right">
            <p className='max-w-125 text-darkkk text-pretty text-[22px] font-semibold leading-[1.1]'><span className='inline-flex font-montreal tracking-[-.25px] text-[#f16b3b] pr-8 relative -top-0.75 text-sm font-medium'>( Réalisations )</span>Chaque réalisation BATIKA est le résultat d’une collaboration étroite, d’un savoir—faire maîtrisé et d’un engagement constant envers la qualité.</p>
        </div>


        <div className="grid grid-cols-2 gap-6 w-full pt-20">
            <div className="w-full h-full object-cover">
                <Image src={maree} alt='' className='w-full h-[800px] object-cover'/>
            </div>
            <div className="w-full h-fit object-cover">
                <Image src={maree} alt='' className='w-full h-full object-cover'/>
            </div>
        </div>
    </div>
  )
}

export default Work
