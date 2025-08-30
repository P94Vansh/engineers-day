'use client'
import React, { useEffect, useState } from 'react'
import data from '@/data.json'

import { Button } from "@/components/ui/moving-border";
function EventDesc({ event }) {
  const [eventName, setEventName] = useState(null)
  useEffect(() => {
    for (let i = 0; i < 22; i++) {
      if (event === data[i].slug) {
        setEventName(data[i])
        break;
      }
    }
  }, [])
  return (
    <div className='p-8'>

      {eventName && (
        <>
          <h1 className='text-white font-bold text-5xl text-center'>{eventName.eventName}</h1>
          <div className='w-full flex justify-center items-center py-8'>
          <Button
                      borderRadius="1.75rem"
                      className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                      Register
                    </Button>
                    </div>
          <h2 className='text-white font-bold text-4xl my-3'>Description</h2>
          <div>
            {eventName.description.map((desc, index) => (
              <ul key={index} className='text-white list-disc px-3'>
                <li>
                  {desc}
                </li>
              </ul>
            ))}
          </div>
          <h2 className='text-white font-bold text-4xl my-3'>Student Coordinator(s)</h2>
          {eventName.eventCoordinators.map((co, index) => (
            <div key={index}>
              <div className='text-white'>
                {index + 1}. Student Coordinator :-
              </div>
              <ul className='list-disc px-8 text-white'>
                <li>Name: {co[0]}</li>
                <li>Phone Number: {co[1]}</li>
                <li>Email: {co[2]} </li>
              </ul>
            </div>
          ))}
          <h2 className='text-white font-bold text-4xl my-3'>Faculty Coordinator(s)</h2>
          {eventName.facultyCoordinators.map((co, index) => (
            <div key={index}>
              <div className='text-white'>
                {index + 1}. Faculty Coordinator :-
              </div>
              <ul className='list-disc px-8 text-white'>
                <li>Name: {co[0]}</li>
                <li>Phone Number: {co[1]}</li>
              </ul>
            </div>
          ))}
          <h2 className='text-white font-bold text-4xl my-3'>Rules and Eligibility</h2>
          <div>
            {eventName.eventGuids.map((guid, index) => (
              <ul key={index} className='text-white list-disc px-3'>
                <li>
                  {guid}
                </li>
              </ul>
            ))}
            <ul className='text-white list-disc px-3'><li>{eventName.eligibility}</li></ul>
          </div>
          {
            eventName.auditionDateandTime && (
              <>
                <h2 className='text-white font-bold text-4xl my-3'>Audition Date and Time and Venue</h2>
                <div>
                  <ul className='text-white list-disc px-3'>
                    <li>
                      {eventName.auditionDateandTime[0]}, {eventName.auditionDateandTime[1]}
                    </li>
                    <li>
                      {eventName.auditionVenue}
                    </li>
                  </ul>
                </div>
              </>
            )
          }
          <h2 className='text-white font-bold text-4xl my-3'>Finals Date and Time and Venue</h2>
          <div>
            <ul className='text-white list-disc px-3'>
              <li>
                {eventName.actualDateandTime[0]}, {eventName.actualDateandTime[1]}
              </li>
              <li>
                {eventName.actualVenue}
              </li>
            </ul>
          </div>
          <h2 className='text-white font-bold text-4xl my-3'>Fees for UIT Students</h2>
          <div className='text-white'>
            {eventName.eventName!=="Kabaddi Championship" && (eventName.registrationFessUIT.map((feeArray, index) => (
              <div key={index}>
                <div> Fees for {index + 1} participant(s) is/are: </div>
                {feeArray.map((obj, index) => (
                  <ul className='list-disc px-8' key={index}>
                    {
                      Object.keys(obj).map((key, index) => (
                        <li key={index}>
                          {key} : {obj[key]}
                        </li>
                      ))
                    }
                  </ul>
                ))}
              </div>
            )))}
            {eventName.eventName==="Kabaddi Championship" && (
              <>
              <div> Fees for a Team is/are: </div>
              <ul className='list-disc px-8'> <li>400</li> </ul>
              </>
            )}
          </div>
          <h2 className='text-white font-bold text-4xl my-3'>Fees for Other Students</h2>
          <div className='text-white'>
            {eventName.eventName!=="Kabaddi Championship" && (eventName.registrationFeesAll.map((feeArray, index) => (
              <div key={index}>
                <div> Fees for {index + 1} participant(s) is/are: </div>
                {feeArray.map((obj, index) => (
                  <ul className='list-disc px-8' key={index}>
                    {
                      Object.keys(obj).map((key, index) => (
                        <li key={index}>
                          {key} : {obj[key]}
                        </li>
                      ))

                    }
                  </ul>
                ))}
              </div>
            )))}
            {eventName.eventName==="Kabaddi Championship" && (
              <>
              <div> Fees for a Team is/are: </div>
              <ul className='px-8 list-disc'> <li >400</li> </ul>
              </>
            )}
          </div>
          {eventName.judgingCriteria && (
            <>
              <h2 className='text-white font-bold text-4xl my-3'>Judging Criteria</h2>
              <div>
                {eventName.judgingCriteria.map((criteria, index) => (
                  <ul key={index} className='text-white list-disc px-3'>
                    <li>
                      {criteria}
                    </li>
                  </ul>
                ))}
              </div>
            </>
          )}


        </>
      )}
    </div>
  )
}

export default EventDesc