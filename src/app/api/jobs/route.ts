import { Job } from '@/types';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: Request) {
  const jobsDirectory = path.join(process.cwd(), 'public', 'content', 'jobs');
  
  try {
    const files = fs.readdirSync(jobsDirectory);
    const jobsList: Job[] = [];

    files.forEach((file) => {
      const filePath = path.join(jobsDirectory, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const jobData = JSON.parse(fileContent);

    {
        const job: Job = {
          date: jobData.date || "",
          title: jobData.title || "",
          company: jobData.company || "",
          location: jobData.location || "",
          range: jobData.range || "",
          url: jobData.url || "",
          description: jobData.description || "",
          tags: jobData.tags || ""
        };

        jobsList.push(job);
    }
    });

    return NextResponse.json(jobsList);
  } catch (error) {
    console.error('Error reading jobs directory:', error);
    return NextResponse.json({ error: 'Error reading jobs directory' }, { status: 500 });
  }
}