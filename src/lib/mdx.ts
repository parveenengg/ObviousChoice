import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_ROOT = path.join(process.cwd(), "content");

export interface Frontmatter {
  title: string;
  date: string;
  summary: string;
  category?: string;
  readTime?: string;
  draft?: boolean;
  // Project specific
  role?: string;
  github?: string;
  demo?: string;
  // Framework specific
  problem?: string;
  mistakes?: string;
}

export interface ContentItem {
  slug: string;
  frontmatter: Frontmatter;
  content: string;
}

export function getContentSlugs(type: "thinking" | "frameworks" | "projects" | "newsletter"): string[] {
  const dirPath = path.join(CONTENT_ROOT, type);
  if (!fs.existsSync(dirPath)) {
    return [];
  }
  return fs.readdirSync(dirPath)
    .filter(file => file.endsWith(".mdx") || file.endsWith(".md"))
    .map(file => file.replace(/\.mdx?$/, ""));
}

export function getContentBySlug(
  type: "thinking" | "frameworks" | "projects" | "newsletter",
  slug: string
): ContentItem | null {
  const dirPath = path.join(CONTENT_ROOT, type);
  
  // Try .mdx then .md
  let filePath = path.join(dirPath, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    filePath = path.join(dirPath, `${slug}.md`);
  }
  
  if (!fs.existsSync(filePath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  
  return {
    slug,
    frontmatter: data as Frontmatter,
    content,
  };
}

export function getAllContent(type: "thinking" | "frameworks" | "projects" | "newsletter"): ContentItem[] {
  const slugs = getContentSlugs(type);
  const items = slugs
    .map(slug => getContentBySlug(type, slug))
    .filter((item): item is ContentItem => item !== null)
    // Filter drafts in production
    .filter(item => process.env.NODE_ENV === "development" || !item.frontmatter.draft);
    
  // Sort items by date descending
  return items.sort((a, b) => {
    return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
  });
}
