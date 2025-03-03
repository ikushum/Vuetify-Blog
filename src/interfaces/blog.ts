export interface BlogPost {
  title: string
  date: string
  text: string
  author: string
  image?: string
}

export interface LargeBlogCardProps {
  blog: BlogPost
}

export interface SmallBlogCardProps {
  blog: BlogPost
}
