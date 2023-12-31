import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
  
  {/* Toggle Dark/Pink Mode */}
  <div className="fixed top-5 right-3 flex items-center">
  <span className= "me-2 text-sm font-medium text-gray-900 dark:text-gray-300"><svg className="fill-orange-100"xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.514 4.486-10 10-10v20c-5.514 0-10-4.486-10-10z"/></svg></span>
  <label className="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" className="sr-only peer" />
  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none dark:peer-focus:rose-100 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-rose-200"></div>
  <span className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"><svg className="fill-orange-100" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 24c-1.147 0-2.22-.455-3.023-1.281-.378-.39-.674-.845-.876-1.335-1.547.654-3.393.294-4.587-.899-.806-.806-1.243-1.88-1.231-3.021.006-.551.115-1.083.319-1.574-1.543-.626-2.602-2.114-2.602-3.89 0-1.762 1.077-3.274 2.601-3.9-.644-1.532-.342-3.33.913-4.585 1.181-1.18 3.078-1.542 4.591-.908.203-.488.498-.941.875-1.328.801-.825 1.874-1.279 3.02-1.279 1.778 0 3.266 1.061 3.891 2.606 1.528-.634 3.404-.281 4.594.909 1.259 1.257 1.56 3.035.904 4.581 1.53.624 2.611 2.139 2.611 3.904 0 1.778-1.062 3.267-2.606 3.892.65 1.534.348 3.336-.909 4.593-1.183 1.182-3.083 1.541-4.593.908-.625 1.544-2.113 2.607-3.892 2.607zm-5.26-9.792l-1.793 1.722c-.864.83-.902 2.256-.018 3.141.839.84 2.234.852 3.17-.048l1.661-1.692.031 2.443c.001 1.141.927 2.226 2.209 2.226 1.085 0 2.208-.844 2.208-2.255v-2.414l1.707 1.707c.872.869 2.327.862 3.156.033.768-.767.965-2.158-.033-3.156l-1.706-1.707h2.413c1.411 0 2.255-1.123 2.255-2.208 0-1.198-.992-2.21-2.167-2.21h-2.347l1.537-1.69c1.035-1.079.808-2.412.048-3.171-.839-.838-2.335-.821-3.142.019l-1.721 1.793v-2.486c0-1.411-1.123-2.255-2.208-2.255-1.281 0-2.241 1.081-2.209 2.227l-.008 2.514-1.698-1.779c-.87-.869-2.327-.861-3.157-.033-.767.767-.964 2.158.034 3.156l1.779 1.778-2.514-.072h-.002c-1.233 0-2.225 1.012-2.225 2.209 0 1.085.843 2.208 2.255 2.208h2.485zm5.26-5.208c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3z"/></svg></span>
</label>
  </div>


      <div className="max-w-md mx-auto bg-white bg-opacity-30 rounded-xl shadow-md overflow-hidden lg:max-w-[80vw] md:max-w-2xl">
  <div className="md:flex">
    <div className="md:shrink-0">
      <img className="h-48 w-full object-cover md:h-full md:w-48" src="/images/portrait.png" alt="Picture of Julia Fitzgerald"/>
    </div>
    <div className="p-8">
    <a href="#" className="block mt-1 text-4xl leading-tight font-lg text-black">Julia Fitzgerald</a>
      <div className="uppercase tracking-wide text-lg text-rose-600 font-semibold">Web Developer</div>
      <p className="mt-2 text-black">I'm a frontend developer with 2 years of applied experience. My goal is to make technology more accessible to everyone, one eye-catching website at a time. When I'm not at my desk I enjoy hiking, video games, and <span className="text-rose-600">rolling natural 20s</span>.</p>
    </div>
  </div>
  {/*  Navbar */}
  <div className="md:shrink-0 flex flex-wrap">
      <div className="flex flex-col items-center justify-center h-full w-full content-center object-cover md:h-full md:w-48">
      <nav className="flex flex-col sm:flex-row p-1 md:p-4 lg:p-6 xl:8" aria-label="In-page jump links">
      <ul className="flex md:flex-col md:flex-wrap">
        <li className="md:flex items-center py-1 lg:px-4"><img className="mr-2 object-scale-down h-5 md:block lg:block sm:hidden xs: hidden" src="/images/sakura_icon.png"/><span className="ml-2 hover:text-rose-600 hover:italic cursor-pointer transition duration-300 ease-in-out">About</span><span className="lg:hidden md:hidden xl:hidden px-3">·</span></li>
        <li className="md:flex items-center py-1 lg:px-4"><img className="mr-2 object-scale-down h-5 md:block lg:block sm:hidden xs: hidden" src="/images/sakura_icon.png"/><span className="ml-2 hover:text-rose-600 hover:italic cursor-pointer transition duration-300 ease-in-out">Projects</span><span className="lg:hidden md:hidden xl:hidden px-3">·</span></li>
        <li className="md:flex items-center py-1 lg:px-4"><img className="mr-2 object-scale-down h-5 md:block lg:block sm:hidden xs: hidden" src="/images/sakura_icon.png"/><span className="ml-2 hover:text-rose-600 hover:italic cursor-pointer transition duration-300 ease-in-out">Experience</span></li>
  </ul>
      </nav>
      <div className="flex space-x-4 py-3">
  <a href="https://github.com/jgfitzgerald" target="_blank" rel="noopener noreferrer">
  <svg className="hover:fill-rose-600 transition duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
  </a>
  <a href="https://linkedin.com/in/jg-fitzgerald" target="_blank" rel="noopener noreferrer">
  <svg className="hover:fill-rose-600 transition duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
  </a>
  <a href="mailto:julia.fitzgerald.nb@gmail.com" target="_blank" rel="noopener noreferrer">
  <svg className="hover:fill-rose-600 transition duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/></svg>
  </a>
      </div>
      </div>
      <div className="p-8 flex flex-col items-center justify-center h-full w-full content-center object-cover md:h-full md:w-48">
        {/* <About/>
        <Projects/>
        <Experience/> */}
      </div>
      </div>
    </div>
    </main>
  )
  }