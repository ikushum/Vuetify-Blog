export interface BlogPost {
  id: string
  title: string
  date: string
  text: string
  author: string
}

export interface BlogFormValues {
  id?: string
  date?: string
  title: string
  text: string
  author: string
}

export interface LargeBlogCardProps {
  blog: BlogPost
}

export interface SmallBlogCardProps {
  blog: BlogPost
}

export interface BlogFormProps {
  defaultValues?: BlogFormValues
}

export interface BlogStoreState {
  blogs: BlogPost[]
}

export interface DeleteBlogDialogProps {
  blog: BlogPost
  modelValue: boolean
}
