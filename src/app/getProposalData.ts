import fs from "fs/promises";
import path from "path";
import { remark } from "remark";
import html from "remark-html";
import matter from "gray-matter";

const proposalDirectory = "proposals";

export default async function getPoposalData(id: string) {
  const fullPath = path.join(proposalDirectory, `${id}.md`);
  const fileContents = await fs.readFile(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
