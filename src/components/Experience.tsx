'use client'
import { Job } from '@/types';
import { useEffect, useState } from 'react';


const fetchData = async () => {
  try {
    const response = await fetch('/api/jobs');
    const data = await response.json();
    return data as Job[];
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export default function Home() {

  const [ jobs, setJobs ] = useState<Job[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const jobsData = await fetchData();
      setJobs(jobsData);
    };

    fetchJobs();

  }, []);

      return (
        <div id="experience" className="mb-4 w-full my-3">
          <div className="uppercase tracking-wide text-lg text-rose-600 dark:text-green-100 font-semibold">
            Experience
          </div>
                {jobs && jobs.map((job) => (
                  <a
                  key={job.title}
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
        <div key={job.title} className=" rounded-xl flex flex-wrap md:flex-no-wrap hover:bg-white hover:bg-opacity-10 border-2 border-transparent hover:border-2 hover:border-white transition duration-300 px-5 py-3 ease-in-out rounded mb-4 hover:border-opacity-10">
          <div className="w-full md:w-2/5 my-2 text-black text-opacity-50 font-semibold uppercase text-sm dark:text-white dark:text-opacity-50">{job.range}</div>
          <div className="w-full md:w-3/5">
            <p className="my-2 mr-2">
              {job.title} - {job.company}
            </p>
            <p className="my-2 text-sm text-black text-opacity-50 dark:text-slate-300">{job.description}</p>
            <div className="flex flex-wrap">
            {job.tags?.map((tag, index) => (
              <span key={index} className="text-sm bg-opacity-45 dark:bg-opacity-45 bg-rose-500 dark:bg-emerald-500 px-2 py-1 text-white rounded-lg m-1">{tag}</span>
            ))}
            </div>
          </div>
        </div></a>
      ))}
        </div>
      );
} 