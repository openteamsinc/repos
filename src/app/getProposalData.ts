import fs from 'fs';
import path from "path";
import { remark } from "remark";
import html from "remark-html";
import matter from "gray-matter";

const proposalDirectory = path.join(process.cwd(), 'proposals');

export interface ProposalData {
  title: string;
  image: string;
  funding: {
    committed: number;
    total: number;
  };
  sponsors: string | null;
  authors: string[];
  content: string;
  id: string;
}

export async function getPoposalIds(): Promise<string[]> {
  const fileNames = await fs.promises.readdir(proposalDirectory);
  return fileNames.map((fileName) => {
    return fileName.replace(/\.md$/, "");
  });
}

export function getPoposalData(id: string): ProposalData {
  const fullPath = path.join(proposalDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);

  return {
    ...data,
    content,
    id
  } as ProposalData;
}

export function getAllProposalsList(): ProposalData[] {
  const fileNames = fs.readdirSync(proposalDirectory);
  const allProposalsData = fileNames.map(fileName => {
    const fullPath = path.join(proposalDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { data, content } = matter(fileContents);

    return {
      ...data,
      content,
      id: fileName.replace(/\.md$/, '') // Remove the .md extension
    } as ProposalData;
  });

  return allProposalsData;
}
