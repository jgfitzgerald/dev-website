import React from 'react';
import { ToggleTheme, Nav, Loading } from '../components';
import { ScrollToTop } from '@/components/ScrollToTop';
import Image from 'next/image'

export default function Home() {

  return (
  <main className="flex min-h-screen md:flex-col justify-center items-center md:p-24">
  <Loading />
  <div id="page-body" className="bg-gradient-to-b from-white/50 shadow-md rounded-xl mx-auto xs:max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-[80vw] md:min-h-[75vh]">
  <ToggleTheme />
  <div className="md:flex">
    <div className="md:shrink-0">
      <Image className="h-48 w-full object-cover md:h-full md:w-48 aspect-ratio-1/1" src="images/portrait.png" alt="Picture of Julia Fitzgerald" width="0" height="0" unoptimized={true}/>
    </div>
    <div className="p-8">
    <a href="#" className="block mt-1 text-4xl leading-tight font-lg text-black dark:text-slate-300 tracking-wider">Julia Fitzgerald</a>
      <div className="uppercase tracking-wide text-lg text-rose-600 dark:text-green-100 font-semibold">Software Developer</div>
      <p className="mt-2 text-black dark:text-slate-300">I&rsquo;m a full-stack developer with two years of hands-on experience based in Saint John, New Brunswick, Canada. I enjoy creating seamless and visually appealing user interfaces for the web. My passion lies in making technology accessible to everyone, with the belief that each website I create contributes to this mission. Away from the screen, I find joy in hiking, sewing, and board games.</p>
    </div>
  </div>
  <Nav />
      </div>
    <ScrollToTop/>
    </main>
  )
}