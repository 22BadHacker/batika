import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <div className='flex items-end justify-between pb-14 min-h-screen h-svh ' >
        
        <div className="flex flex-col gap-6">
            <div className="flex text-darkkk flex-col gap-2">
                <p className='uppercase font-inter  text-[17px] font-[500]'>Business</p>
                <Link className='text-[22px] font-[600]' href='/'>contact@batika.ma</Link>
            </div>
        </div>
         <div className="w-full h-full sticky bottom-0 right-0 items-end flex justify-end text-right">
            <p className='max-w-125 text-darkkk text-pretty text-[22px] font-semibold leading-[1.1]'><span className='inline-flex uppercase font-montreal tracking-[-.25px] text- pr-8 relative -top-0.75 text-sm font-medium'>( Contact )</span>Cet espace est le point de départ de nouvelles collaborations, qu’il s’agisse de projets de construction, de partenariats ou d’opportunités de carrière avec BATIKA.</p>
        </div>
        {/* <h1 className='text-3xl font-[600] text-darkkk  max-w-[650px]'>Cet espace est le point de départ de nouvelles collaborations, qu’il s’agisse de projets de construction, de partenariats ou d’opportunités de carrière avec BATIKA</h1> */}
    </div>
  )
}

export default Contact
