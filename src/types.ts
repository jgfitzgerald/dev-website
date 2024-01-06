export interface Job {
    date: string;
    title: string;
    company: string;
    location: string;
    range: string;
    url: string;
    description: string;
    tags: string[];
  }

export interface Project {
    id: number;
    date: string;
    title: string;
    github: string;
    tech: string[];
    company: string;
    description: string;
  };
  