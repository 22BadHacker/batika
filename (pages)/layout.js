import Footer from '@/component/Footer'
import NavBar from '@/component/NavBar'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className='min-h-screen grid grid-rows-[1fr_auto] w-full h-auto'>
      {/* <header className=" w-full z-10  ">
            <NavBar />
          </header> */}

          <div className="min-h-screen">
            {children}
          </div>

          
          {/* <section>
              <Footer/>
          </section> */}
    </div>
  )
}

export default layout
