import Contact from '@/component/(pagesComponent)/Contact'
import React from 'react'

export const metadata = {
    title: '𝗕𝗔𝗧𝗜𝗞𝗔 — Contact',
}
const page = () => {
  return (
    <div className=' min-h-screen h-auto w-full bg-[#f7f7f7]'>
        <div className="container-size ">
            <Contact/>
        </div>
    </div>
  )
}

export default page
