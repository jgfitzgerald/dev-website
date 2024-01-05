'use client'
import { Project } from '@/types';
import { useEffect, useState } from 'react';
import Image from 'next/image';


const fetchData = async () => {
  try {
    const response = await fetch('/api/projects');
    const data = await response.json();
    return data as Project[];
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export default function Home() {

    const [ projects, setProjects ] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectData = await fetchData();
      setProjects(projectData);
    };

    fetchProjects();

  }, []);

  return (
    <div id="projects" className="mb-4 w-full my-3">
      <div className="uppercase tracking-wide text-lg text-rose-600 dark:text-green-100 font-semibold">Projects</div>
      <div className="flex flex-wrap-reverse md:flex-no-wrap">
        {projects && projects.map((proj) => (
          <a
          key={proj.title}
          href={proj.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div key={proj.title} className="w-full flex flex-wrap-reverse md:flex-no-wrap rounded-xl flex flex-wrap md:flex-no-wrap hover:bg-white hover:bg-opacity-10 border-2 border-transparent hover:border-2 hover:border-white transition duration-300 px-5 py-3 ease-in-out rounded mb-4 hover:border-opacity-10">
            <div className="w-full md:w-2/5 flex items-center justify-center md:justify-start">
            <Image
            className="aspect-ratio-1/1 h-2/3 w-auto rounded-xl border-2 border-white border-opacity-10"
            src={`/content/thumbnails/${proj.id}.png`}
            alt={`Thumbnail for ${proj.title}`}
            width={100}
            height={100}
            unoptimized={true}
            />
            </div>
            <div className="w-full md:w-3/5">
            <p className="mt-2 mr-2">{proj.title}</p>
            <p className="text-sm">{proj.company}</p>
            <p className="my-2 text-sm text-black text-opacity-50 dark:text-slate-300">{proj.description}</p>
            <div className="flex flex-wrap">
            {proj.tech?.map((tech, index) => (
          <span key={index} className="text-sm bg-opacity-45 dark:bg-opacity-45 bg-rose-500 dark:bg-emerald-500 px-2 py-1 text-white rounded-lg m-1">{tech}</span>
        ))}
        </div>
            </div>
          </div></a>
        ))}
      </div>
    </div>
  );  
}

