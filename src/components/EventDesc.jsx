'use client'
import React, { useEffect, useState } from 'react'
import data from '@/data.json'
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/moving-border";
import { Meteors } from './ui/meteors';
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
  const router=useRouter()
  return (
    <div>
    {eventName && eventName.eventName!=="War-tā-lab" && (
      <>
      <div className='p-8'>
        
          <h1 className='text-white font-bold text-5xl text-center'>{eventName.eventName}
            {
              eventName.eventName!=="Cook Without Fire" && (
                <>
                {" "}
                ({eventName.actualEventName})
                </>
              )
            }
          </h1>
          <div className='w-full flex justify-center items-center py-8'>
          <Button
            onClick={()=> router.push('/register')}
                      borderRadius="1.75rem"
                      className="bg-white cursor-pointer dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                      Register
                    </Button>
                    </div>
          <h2 className='text-white font-bold text-4xl my-3'>Event Description</h2>
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
          {
            eventName.eventName!=="UIT Castle" ? (
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

            ):(
              <div>
            {eventName.eventGuids.map((guid, index) => (
              <ul key={index} className='text-white list-disc px-3'>
                <li>
                  {
                    Object.keys(guid).map((val)=>(
                      <div key={index}>
                      <div>{val}</div>
                      <ul className='text-white list-disc px-8'>
                      {
                        guid[val].map((val,index)=>(
                          <div key={index}>
                            <li>{val}</li>
                          </div>
                        ))
                      }
                      </ul>
                      </div>
                    ))
                  }
                </li>
              </ul>
            ))}
            <ul className='text-white list-disc px-3'><li>{eventName.eligibility}</li></ul>
          </div>
            )
          }
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
                feeArray.length>0 && (
                  
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
                )

            )))}
            {eventName.eventName==="Kabaddi Championship" && (
              <>
              <div> Fees for a Team is/are: </div>
              <ul className='list-disc px-8'> <li>1500</li> </ul>
              </>
            )}
          </div>
          <h2 className='text-white font-bold text-4xl my-3'>Fees for Other Students</h2>
          <div className='text-white'>
            {eventName.eventName!=="Kabaddi Championship" && (eventName.registrationFeesAll.map((feeArray, index) => (
                feeArray.length>0 && (
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

                )
            )))}
            {eventName.eventName==="Kabaddi Championship" && (
              <>
              <div> Fees for a Team is/are: </div>
              <ul className='px-8 list-disc'> <li >1500</li> </ul>
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

          </div>
          <Meteors number={20} />
          <hr className='h-1 bg-white w-full'/>
        </>
      )}




    {eventName && eventName.eventName==="War-tā-lab" && (
      <>
      <div className='p-8'>

          <h1 className='text-white font-bold text-5xl text-center'>{eventName.eventName}</h1>
          <div className='w-full flex justify-center items-center py-8'>
          <Button
            onClick={()=> router.push('/register')}
                      borderRadius="1.75rem"
                      className="bg-white cursor-pointer dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                      Register
                    </Button>
                    </div>
          <h2 className='text-white font-bold text-4xl my-3 text-center'>{eventName.subEvent1.name}</h2>
          <h2 className='text-white font-bold text-4xl my-3'>Description</h2>
          <div>

            {eventName.subEvent1.description.map((desc, index) => (
              <ul key={index} className='text-white list-disc px-3'>
                <li>
                  {desc}
                </li>
              </ul>
            ))}
          </div>
          <h2 className='text-white font-bold text-4xl my-3'>Student Coordinator(s)</h2>
          {eventName.subEvent1.eventCoordinators.map((co, index) => (
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
          {eventName.subEvent1.facultyCoordinators.map((co, index) => (
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
            {eventName.subEvent1.eventGuids.map((guid, index) => (
              <ul key={index} className='text-white list-disc px-3'>
                <li>
                  {guid}
                </li>
              </ul>
            ))}
            <ul className='text-white list-disc px-3'><li>{eventName.eligibility}</li></ul>
          </div>
          {
            eventName.subEvent1.auditionDateandTime && (
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
                {eventName.subEvent1.actualDateandTime[0]}, {eventName.subEvent1.actualDateandTime[1]}
              </li>
              <li>
                {eventName.subEvent1.actualVenue}
              </li>
            </ul>
          </div>
          <h2 className='text-white font-bold text-4xl my-3'>Fees for UIT Students</h2>
          <div className='text-white'>
            {eventName.subEvent1.registrationFessUIT.map((feeArray, index) => (
                feeArray.length>0 && (
                  
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
          </div>
          <h2 className='text-white font-bold text-4xl my-3'>Fees for Other Students</h2>
          <div className='text-white'>
            {eventName.subEvent1.registrationFeesAll.map((feeArray, index) => (
                feeArray.length>0 && (
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
          </div>
          {eventName.subEvent1.judgingCriteria && (
            <>
              <h2 className='text-white font-bold text-4xl my-3'>Judging Criteria</h2>
              <div>
                {eventName.subEvent1.judgingCriteria.map((criteria, index) => (
                  <ul key={index} className='text-white list-disc px-3'>
                    <li>
                      {criteria}
                    </li>
                  </ul>
                ))}
              </div>
            </>
          )}
          <hr  className='h-1 bg-white'/>
          <h2 className='text-white font-bold text-4xl my-3 text-center'>{eventName.subEvent2.name}</h2>
          <h2 className='text-white font-bold text-4xl my-3'>Description</h2>
          <div>
            {eventName.subEvent2.description.map((desc, index) => (
              <ul key={index} className='text-white list-disc px-3'>
                <li>
                  {desc}
                </li>
              </ul>
            ))}
          </div>
          <h2 className='text-white font-bold text-4xl my-3'>Student Coordinator(s)</h2>
          {eventName.subEvent2.eventCoordinators.map((co, index) => (
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
          {eventName.subEvent2.facultyCoordinators.map((co, index) => (
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
            {eventName.subEvent2.eventGuids.map((guid, index) => (
              <ul key={index} className='text-white list-disc px-3'>
                <li>
                  {guid}
                </li>
              </ul>
            ))}
            <ul className='text-white list-disc px-3'><li>{eventName.eligibility}</li></ul>
          </div>
          {
            eventName.subEvent2.auditionDateandTime && (
              <>
                <h2 className='text-white font-bold text-4xl my-3'>Audition Date and Time and Venue</h2>
                <div>
                  <ul className='text-white list-disc px-3'>
                    <li>
                      {eventName.subEvent2.auditionDateandTime[0]}, {eventName.subEvent2.auditionDateandTime[1]}
                    </li>
                    <li>
                      {eventName.subEvent2.auditionVenue}
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
                {eventName.subEvent2.actualDateandTime[0]}, {eventName.subEvent2.actualDateandTime[1]}
              </li>
              <li>
                {eventName.subEvent2.actualVenue}
              </li>
            </ul>
          </div>
          <h2 className='text-white font-bold text-4xl my-3'>Fees for UIT Students</h2>
          <div className='text-white'>
           
              <>
              <div> Fees for a Team is/are: </div>
              <ul className='list-disc px-8'> <li>400</li> </ul>
              </>
          </div>
          <h2 className='text-white font-bold text-4xl my-3'>Fees for Other Students</h2>
          <div className='text-white'>
            <>
              <div> Fees for a Team is/are: </div>
              <ul className='list-disc px-8'> <li>400</li> </ul>
              </>
          </div>
          {eventName.subEvent2.judgingCriteria && (
            <>
              <h2 className='text-white font-bold text-4xl my-3'>Judging Criteria</h2>
              <div>
                {eventName.subEvent2.judgingCriteria.map((criteria, index) => (
                  <ul key={index} className='text-white list-disc px-3'>
                    <li>
                      {criteria}
                    </li>
                  </ul>
                ))}
              </div>
            </>
          )}

          </div>
          <Meteors number={20} />
          <hr className='h-1 bg-white w-full'/>
        </>
      )}
  </div>
  )
}

export default EventDesc