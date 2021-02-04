import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

export interface PostFrontMatter {
  slug: string;
  title: string;
  tag: string;
  date: string;
  image: string;
  excerpt: string;
}

export interface Post {
  frontMatter: PostFrontMatter;
  content: string;
}

const root = process.cwd();

const getFormattedDate = (date: string) => new Date(date).toISOString().slice(0, 10);

export function getAllPostsFrontMatter() {
  const files = fs.readdirSync(path.join(root, 'posts'));

  return files.map((postSlug) => {
    const source = fs.readFileSync(path.join(root, 'posts', postSlug), 'utf8');
    const { data, content } = matter(source);

    const excerpt = content.slice(0, 200);

    return {
      ...data,
      date: getFormattedDate(data.date),
      slug: postSlug.replace('.md', ''),
      excerpt,
    };
  }) as PostFrontMatter[];
}

export function getFiles() {
  return fs.readdirSync(path.join(root, 'posts'));
}

export function getPostBySlug(slug: string) {
  const source = fs.readFileSync(
    path.join(root, 'posts', `${slug}.md`),
    'utf8',
  );

  const { data, content } = matter(source);

  const excerpt = content.slice(0, 200);

  return {
    frontMatter: {
      ...data,
      date: getFormattedDate(data.date),
      slug,
      excerpt,
    },
    content,
  } as Post;
}
