import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type ContentData = {
  slug: string;
  title: string;
  description: string;
  content: string;
};

const contentDir = path.join(process.cwd(), "content");

function getFilePath(slug: string) {
  const mdxPath = path.join(contentDir, `${slug}.mdx`);
  const mdPath = path.join(contentDir, `${slug}.md`);
  if (fs.existsSync(mdxPath)) return mdxPath;
  if (fs.existsSync(mdPath)) return mdPath;
  return null;
}

export function getContentBySlug(slug: string): ContentData {
  const filePath = getFilePath(slug);
  if (!filePath) {
    throw new Error(`Conteúdo não encontrado para o slug: ${slug}`);
  }
  const file = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(file);

  if (typeof data.title !== "string" || typeof data.description !== "string") {
    throw new Error(`Frontmatter inválido em ${filePath}`);
  }

  return {
    slug,
    title: data.title,
    description: data.description,
    content
  };
}

export function getPageSlugs() {
  return fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => file.replace(/\.(mdx|md)$/, ""))
    .filter((slug) => slug !== "home")
    .sort();
}
