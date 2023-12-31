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
      <p className="mt-2 text-black">I'm a frontend developer with 2 years of applied experience. My goal is to make technology more accessible to everyone, one eye-catching website at a time. When I'm not at my desk I enjoy hiking, video games, and <span className="text-rose-600">rolling natural 20s</span>.</p>
    </div>
  </div>
  {/*  Navbar */}
  <div className="md:shrink-0 flex flex-wrap">
      <div className="flex flex-col items-center justify-center h-full w-full content-center object-cover md:h-full md:w-48">
      <nav className="flex flex-col sm:flex-row p-1 md:p-4 lg:p-6 xl:8" aria-label="In-page jump links">
      <ul className="flex md:flex-col md:flex-wrap">
        <li className="md:flex items-center py-1 lg:px-4"><img className="mr-2 object-scale-down h-5 md:block lg:block sm:hidden xs: hidden" src="/images/sakura_icon.png"/><span className="ml-2 hover:text-rose-600 cursor-pointer transition duration-300 ease-in-out">About</span><span className="lg:hidden md:hidden xl:hidden px-3">·</span></li>
        <li className="md:flex items-center py-1 lg:px-4"><img className="mr-2 object-scale-down h-5 md:block lg:block sm:hidden xs: hidden" src="/images/sakura_icon.png"/><span className="ml-2 hover:text-rose-600 cursor-pointer transition duration-300 ease-in-out">Projects</span><span className="lg:hidden md:hidden xl:hidden px-3">·</span></li>
        <li className="md:flex items-center py-1 lg:px-4"><img className="mr-2 object-scale-down h-5 md:block lg:block sm:hidden xs: hidden" src="/images/sakura_icon.png"/><span className="ml-2 hover:text-rose-600 cursor-pointer transition duration-300 ease-in-out">Experience</span></li>
  </ul>
      </nav>
      <div className="flex space-x-4 py-3">
  <a href="https://github.com/jgfitzgerald" target="_blank" rel="noopener noreferrer">
  <svg className="hover:fill-rose-600 transition duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
  </a>

  <a href="https://linkedin.com/in/jg-fitzgerald" target="_blank" rel="noopener noreferrer">
  <svg className="hover:fill-rose-600 transition duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
  </a>
      </div>
      </div>
      <div className="p-8 flex flex-col items-center justify-center h-full w-full content-center object-cover md:h-full md:w-48">rendering area</div>
      </div>
    </div>

    </main>
  )
  }