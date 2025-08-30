'use client'
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Button } from "@/components/ui/moving-border";
import ImageBox from "@/components/CardGuests";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"
import { SparklesCore } from "@/components/ui/sparkles";
import { CardStack } from "@/components/ui/card-stack";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Home() {
  const router=useRouter()
  const CARDS1 = [
    {
      id: 0,
      src: 'event2.JPG'
    },
    {
      id: 1,
      src: 'event3.JPG'
    },
    {
      id: 2,
      src: 'event4.JPG'
    },

  ]
  const CARDS2 = [
    {
      id: 0,
      src: 'event5.JPG'
    },
    {
      id: 1,
      src: 'event6.JPG'
    },
    {
      id: 2,
      src: 'event7.JPG'
    }
  ]
  const CARDS3 = [
    {
      id: 0,
      src: 'event8.JPG'
    },
    {
      id: 1,
      src: 'event9.jpg'
    },
    {
      id: 2,
      src: 'event10.JPG'
    }
  ]

  const typeWriterPatrons = [
    {
      text: "Our",
    },
    { text: "Patrons" }
  ];
  const points = ['Grand 3-day fest by the Core Committee', 'Mix of technical and non-technical events'
    , 'Includes several technical events ranging from coding competition torobo wars',
    'Several Non tech events included from Dj Mixes to soulful singing',
    'Celebrates creativity, talent, and engineering brilliance',
    'Platform to learn, compete, network and grow'
  ]
  const words = 'Where Innovation meets Elevation'
  return (
    <>
      <BackgroundLines className=" h-screen flex items-center justify-center w-full flex-col px-4">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-200 dark:to-white text-3xl md:text-5xl lg:text-5xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Engineers&apos; Day Mahotsav
        </h2>
        
        <TextGenerateEffect words={words} />
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:text-white md:text-2xl lg:text-3xl font-sans py-2 md:pt-10 relative z-20 font-bold tracking-tight">
          Organised By:
        </h2>
        <p className="max-w-xl mx-auto text-md md:text-2xl text-neutral-300 dark:text-white text-center">
          CORE COMITTEE,UIT
        </p>
        <div className="flex md:flex-row flex-col gap-5 pt-4 mt-3">
          <Button
            borderRadius="1.75rem"
            onClick={()=> router.push('/technical-events')}
            className="bg-white cursor-pointer dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            Technical Events
          </Button>
          <Button
            borderRadius="1.75rem"
            onClick={()=> router.push('/non-technical-events')}
            className="bg-white cursor-pointer dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            Non-Technical Events
          </Button>
        </div>
      </BackgroundLines>
      <hr className="bg-white h-0.5" />
      <div className="w-full rounded-md flex flex-col md:justify-center  antialiased bg-grid-white/[0.02] relative overflow-hidden items-center">
        <TypewriterEffectSmooth words={[{ text: 'Why' }, { text: "Engineers'" }, { text: "Day?" }]} />
        <div className="w-full flex md:flex-row flex-col-reverse items-center justify-center px-4 pt-10">
          <div className="md:w-[50%] w-[100%] px-3 text-white font-sans md:text-xl text-md">
            <strong>Sir Mokshagundam Visvesvaraya</strong> , known as <strong>MOKSH</strong>,
            was a brilliant Indian engineer and reformer. Born on
            15th September 1861, he made major contributions in
            irrigation and dam construction. He was honored with
            the <strong> BHARAT RATNA </strong> and is remembered for his role in
            modernizing India.
          </div>
          <div className="md:w-[50%] w-[80%] flex items-center justify-center"> <Image src={'/ed.jpg'} width={250} height={250} alt="image" /> </div>
        </div>
        <div className="w-full flex md:flex-row-reverse flex-col-reverse px-4 py-4 md:py-0">
          <div className="md:w-[50%] w-[100%] px-3 text-white font-sans md:text-xl text-md">
            <ul>
              {points.map((point, index) => (
                <li className="list-disc" key={index}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="md:w-[50%] w-[100%] px-10">  <Image src={'/ed2.jpg'} width={400} height={400} alt="image" /> </div>
        </div>

      </div>
      <hr className="bg-white h-0.5" />
      <div className="flex flex-col w-full justify-center items-center">
        <TypewriterEffectSmooth words={typeWriterPatrons} />
        <div className="flex md:flex-row flex-col justify-center items-center ">
          <ImageBox src="/chancellorsir.jpg" title="Chief Patron" name="Shri Jitender Joshi" pos="President,UU" />
          <ImageBox src="/chancellorsir.jpg" title="Chief Patron" name="Mrs. Anuradha Joshi" pos="Vice President Sushila Devi Center for Professional Studies & Research" />

          <ImageBox src="/vc.jpg" title="Co-Chief Patron" name="Ms. Ankita Joshi" pos="Vice President,UU" />
        </div>
        <div className="flex md:flex-row flex-wrap flex-col justify-center items-center">

          <ImageBox title="Patron" src="/faculity-3.jpg" name="Prof. Dharam Buddhi" pos="Vice Chancellor,UU" />
          <ImageBox title="Patron" src="/homebg.jpg" name="Prof. Rajesh Bahuguna" pos="Pro Vice Chancellor,UU" />
          <ImageBox title="Patron" src="/directorr.jpg" name="Dr. Abhishek Joshi" pos="Executive Director,UU" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <ImageBox src="/deansir.jpg" title="Convener" name="Prof. (Dr.) Sumit Chaudhary" pos="Director,UIT" />
        <ImageBox src="/hodmam.jpg" title="Co-Convener" name="Dr. Madhu Kirola" pos="HOD (CSE), UIT" />
      </div>
      <div className="flex md:flex-row flex-wrap flex-col justify-center items-center">
        <ImageBox title={'Student Coordinator'} src="/studco.jpg" name="Ishu Mishra" pos="General Secretary, Core Committee" />
      </div>
      <hr className="bg-white h-0.5" />
      <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <Image src={'/UuLogo.jpg'} alt="University Logo" width={300} height={300} />
        <TypewriterEffectSmooth words={[{ text: 'About' }, { text: 'Uttaranchal' }, { text: 'Institute' }, { text: 'Of' }, { text: 'Technology' }]} />
        <div className="text-white font-serif md:text-2xl text-md p-3">Uttaranchal Institute of Technology (UIT), established in 2006 in Dehradun, is a premier engineering college under Uttaranchal University. UIT offers industry-aligned B.Tech and M.Tech programs, fostering innovation, research, and leadership. With modern infrastructure, expert faculty, and strong placement records, UIT empowers students to become globally competitive professionals. Its vibrant campus culture and academic excellence make it a top choice for aspiring engineers in Uttarakhand.</div>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
          />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
      </div>
      <hr className="bg-white h-0.5" />
      <div className="md:h-[50rem] h-[60rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <Image src={'/CoreCommitteeLogo.png'} alt="Core Committe Logo" width={130} height={130} />
        <TypewriterEffectSmooth words={[{ text: 'What' }, { text: 'Is' }, { text: 'Core' }, { text: 'Committee?' }]} />
        <div className=" w-full flex md:flex-row flex-col justify-center items-center p-7 gap-3">
          <div className="text-white text-md md:text-2xl">The Core Committee is the flagship club of UIT, bringing
            together representatives from all student clubs under
            one roof. It serves as the central body that plans,
            coordinates, and executes the flagship fests and major
            events of UIT. More than just an organizing team, the
            Core Committee embodies leadership, collaboration,
            and creativity, ensuring that every event reflects the
            spirit and excellence of our institute.</div>
          <Image src={'/ccg.JPG'} alt="Core Committe Group" width={400} height={300} />
        </div>
        <div className="w-[40rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
      <hr className="bg-white h-0.5" />
      <div className="w-full flex justify-center items-center">
        <TypewriterEffectSmooth words={[{ text: 'Our' }, { text: 'Glimpses' }]} />
      </div>
      <div className="full flex items-center justify-center gap-20 flex-wrap py-10">
        <CardStack items={CARDS1} />
        <CardStack items={CARDS2} />
        <CardStack items={CARDS3} />
      </div>
      <div className="h-20 bg-black"/>
      <hr className="bg-white h-0.5" />

    </>
  );
}
