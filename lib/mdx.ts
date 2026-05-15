import { bundleMDX } from "mdx-bundler";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import remarkGfm from "remark-gfm";
import remarkUnwrapImages from "remark-unwrap-images";

const POSTS_PATH = path.join(process.cwd(), "lib/content/posts");

export interface PostFrontmatter {
  title: string;
  date: string;
  excerpt: string;
  coverImage?: string;
  category?: string;
  [key: string]: any;
}

export const getPostBySlug = async (slug: string) => {
  const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`);
  
  if (!fs.existsSync(postFilePath)) {
    return null;
  }

  const source = fs.readFileSync(postFilePath, "utf8");
  
  // mdx-bundler handles frontmatter and bundling in one go
  const { code, frontmatter } = await bundleMDX({
    source,
    cwd: POSTS_PATH,
    mdxOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm, remarkUnwrapImages];
      options.rehypePlugins = [...(options.rehypePlugins ?? [])];
      return options;
    },
  });

  return {
    code,
    frontmatter: frontmatter as PostFrontmatter,
  };
};

export const getAllPostSlugs = () => {
  if (!fs.existsSync(POSTS_PATH)) {
    return [];
  }
  const fileNames = fs.readdirSync(POSTS_PATH);
  return fileNames.map((fileName) => fileName.replace(/\.mdx$/, ""));
};

export const getAllPosts = () => {
    if (!fs.existsSync(POSTS_PATH)) {
        return [];
    }
    const fileNames = fs.readdirSync(POSTS_PATH);
    const allPostsData = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, "");
        const fullPath = path.join(POSTS_PATH, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data } = matter(fileContents);

        return {
            slug,
            frontmatter: data as PostFrontmatter,
        };
    });

    return allPostsData.sort((a, b) => (new Date(a.frontmatter.date) < new Date(b.frontmatter.date) ? 1 : -1));
};
