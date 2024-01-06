import React from 'react';
import { ToggleTheme, Nav, Loading } from '../components';
import { ScrollToTop } from '@/components/ScrollToTop';
import Image from 'next/image'

export default function Home() {

  return (
  <main className="flex min-h-screen flex-col items-center justify-between p-24">
  <Loading />
  <div id="page-body" className="max-w-md mx-auto bg-gradient-to-b from-white/50 rounded-xl shadow-md lg:max-w-[80vw] md:max-w-2xl min-h-[75vh]">
  <ToggleTheme />
  <div className="md:flex">
    <div className="md:shrink-0">
      <Image className="h-48 w-full object-cover md:h-full md:w-48 aspect-ratio-1/1" src="images/portrait.png" alt="Picture of Julia Fitzgerald" width="0" height="0" unoptimized={true}/>
    </div>
    <div className="p-8">
    <a href="#" className="block mt-1 text-4xl leading-tight font-lg text-black dark:text-slate-300 tracking-wider">Julia Fitzgerald</a>
      <div className="uppercase tracking-wide text-lg text-rose-600 dark:text-green-100 font-semibold">Software Developer</div>
      <p className="mt-2 text-black dark:text-slate-300">I&rsquo;m a full stack developer with 2 years of applied experience. I enjoy building seamless user interfaces for the web. My goal is to make technology more accessible to everyone, one eye-catching website at a time. When I&rsquo;m not at my desk I enjoy hiking, video games, and <span className="text-rose-600 dark:text-green-100">rolling natural 20s</span>.</p>
    </div>
  </div>
  <Nav />
      </div>
    <ScrollToTop/>
    </main>
  )
}