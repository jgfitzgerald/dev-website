import { Project } from '@/types';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: Request) {
  const projectDirectory = path.join(process.cwd(), 'public', 'content', 'projects');
  
  try {
    const files = fs.readdirSync(projectDirectory);
    const projectList: Project[] = [];

    files.forEach((file) => {
      const filePath = path.join(projectDirectory, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');

      try {
        const data = JSON.parse(fileContent);

        const project: Project = {
          id: data.id || null,
          date: data.date || "",
          title: data.title || "",
          github: data.github || "",
          external: data.external || "",
          tech: data.tech || [],
          company: data.company || "",
          showInProjects: data.showInProjects || false,
          description: data.description || ""
        };

        projectList.push(project);
      } catch (parseError) {
        console.error(`Error parsing JSON in file ${file}:`, parseError);
      }
    });

    return NextResponse.json(projectList);
  } catch (error) {
    console.error('Error reading projects directory:', error);
    return NextResponse.json({ error: 'Error reading projects directory' }, { status: 500 });
  }
}
