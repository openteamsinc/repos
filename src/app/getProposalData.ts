import fs from 'fs';
import path from "path";
import { remark } from "remark";
import html from "remark-html";
import matter from "gray-matter";

const proposalDirectory = "proposals";

export interface ProposalData {
  title: string;
  image: string;
  funding: {
    committed: number;
    total: number;
  };
  sponsors: string[] | null;
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

export async function getPoposalData(id: string): Promise<ProposalData> {
  const fullPath = path.join(proposalDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();

  return {
    ...data,
    content: contentHtml,
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
