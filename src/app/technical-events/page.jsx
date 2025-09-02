import React from 'react'
import ImageBoxEv from '@/components/EventBox'
import data from '@/data.json'
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"
import Link from 'next/link'

function Page() {
  return (
    <>
      <div
        className="
          relative min-h-screen w-full 
          bg-cover bg-center bg-no-repeat
          sm:bg-[url('/eventPageDesktop.jpg')]
          bg-[url('/eventPageMobile.jpg')]
        "
      >
        {/* Spacer for Navbar */}
        <div className="h-16"></div>

        {/* Title */}
        <div className="bg-black/50 w-full flex justify-center items-center">
          <TypewriterEffectSmooth
            words={[{ text: "Technical" }, { text: "Events" }]}
          />
        </div>

        {/* Event Grid */}
        <div className="p-8 flex flex-wrap gap-5 justify-center items-center">
          {data.map(
            (event, index) =>
              event.eventType === "Technical" && (
                <Link key={index} href={`/event/${event.slug}`}>
                  <ImageBoxEv src={event.src} title={event.eventName} />
                </Link>
              )
          )}
        </div>
      </div>
      <hr className='bg-white h-1'/>
    </>
  )
}

export default Page
