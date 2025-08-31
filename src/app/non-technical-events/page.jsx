import React from 'react'
import ImageBoxEv from '@/components/EventBox'
import data from '@/data.json'
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"
import Link from 'next/link'
function page() {
  return (
      <>
      <div className='h-16'></div>
      <div className='w-full flex justify-center items-center'>
    <TypewriterEffectSmooth words={[{text:"Non"},{text:"Technical"},{text:"Events"}]}/>
    </div>
    <div className='p-8 flex flex-wrap gap-5 justify-center items-center'>
      {data.map((event,index)=>(
        event.eventType==="Non-Technical" && (
          <Link  key={index} href={`/event/${event.slug}`}>
        <ImageBoxEv src={event.src} title={event.eventName}/>
        </Link>
        )
      ))}
      </div>
      <hr className='bg-white h-1'/>
      </>
  )
}

export default page
