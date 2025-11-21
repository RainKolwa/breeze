export interface Post {
  id: string;
  frontmatter: {
    date: string;
    title: string;
  };
  excerpt: string;
  fields: {
    slug: string;
  };
}
