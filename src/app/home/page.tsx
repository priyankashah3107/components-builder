import React from 'react'
import '../home/home.css'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
const info = {
   heading: "Find balance, elevate spirit",
   desc: "Our Yoga studio is a peaceful sanctuary in the city, offerring a range of classes from",
   des: "invigorating Vinyasa to Yin, suitable for all levels. Led by expert instructors, we provide",
   descr: "a nurtring environment for both bodu and soul"
}
const page = () => {
  return (
    <>
     <div className='flex flex-col items-center text-center'>
        <Image  src={"/img.png"} alt='img' width={1024} height={50} className='w-full mt-4 h-96'/>

         <div className='mt-6 ' >
         <h1 className='head ani'>{info.heading}</h1>
         <p className='para   '>{info.desc}</p>
         <p className='para '>{info.des}</p>
         <p className='para '>{info.descr}</p>
         </div>
          
          <div className='flex flex-row gap-10 mt-6 '>
          <Button className='w-32 h-14 font-semibold bg-[#b2d71b9e] hover:bg-[#b2d71b9e] text-black'>Join Today</Button>
          <Button className='w-32 h-14 font-semibold bg-white hover:bg-white text-black border border-black'>Learn More</Button>
          </div>
         
     </div>
    </>
  )
}

export default page