import React from 'react'

const Contact = () => {
  return (
    <div className='pt-80 ' >
        <div className="flex gap-4 flex-col">
            <p className='font-inter font-medium w-fit relative text-[12px]'>Contact Nous <span className='w-full absolute -bottom-px left-0 h-[.5px] bg-darkk'/></p>
            <h1 className='font- max-w-[1000px] text-[#0d1c28]/90 text-[80px] leading-[1]'>Vous envisagez un projet et souhaitez en discuter ?</h1>
            {/* <h1 className='font-instrument max-w-[800px] text-[#0d1c28]/90 text-[80px] leading-[1]'>Vous envisagez un projet et souhaitez en discuter ?</h1> */}
        </div> 

        <div className="grid gap-50 pt-30 grid-cols-[auto_1fr] w-full">
            <p className=' font- max-w-[500px] font-medium text-pretty text-balance leading-[22px] text-2xl text-darkk'>Si vous souhaitez en savoir plus ou échanger avec notre équipe, remplissez le formulaire ci-dessous.
            Nous vous recontacterons dans les plus brefs délais.</p>

            <div className="w-full rounded p-6 bg-[#f5f5f5]">
                <div className="flex gap-">
                    <p>Owner Name</p>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Contact
