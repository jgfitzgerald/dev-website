export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-md mx-auto bg-white bg-opacity-50 rounded-xl shadow-md overflow-hidden lg:max-w-[60vw] md:max-w-2xl">
  <div className="md:flex">
    <div className="md:shrink-0">
      <img className="h-48 w-full object-cover md:h-full md:w-48" src="/images/portrait.png" alt="Picture of Julia Fitzgerald"/>
    </div>
    <div className="p-8">
    <a href="#" className="block mt-1 text-2xl leading-tight font-lg text-black">Julia Fitzgerald</a>
      <div className="uppercase tracking-wide text-sm text-rose-600 font-semibold">Web Developer</div>
      <p className="mt-2 text-black">I'm a frontend developer with 2 years of applied experience. My goal is to make technology more accessible to everyone, one eye-catching website at a time. When I'm not at my desk I enjoy hiking, video games, and rolling natural 20's.</p>
    </div>
  </div>
</div>
    </main>
  )
}
