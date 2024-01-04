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
    date: string;
    title: string;
    github: string;
    external: string;
    tech: string[];
    company: string;
    showInProjects: boolean;
    description: string;
  };
  