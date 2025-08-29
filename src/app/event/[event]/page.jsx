import EventDesc from '@/components/EventDesc'
import React from 'react'
async function page({ params }) {
  const slug = await params
  const event = slug.event
  return (
    <div>
      <div className='h-20'></div>
      <EventDesc event={event} />
    </div>
  )
}

export default page
