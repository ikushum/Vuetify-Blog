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

export interface BlogLargeCardProps {
  blog: BlogPost
}

export interface BlogSmallCardProps {
  blog: BlogPost
}

export interface BlogFormProps {
  defaultValues?: BlogFormValues
}

export interface BlogStoreState {
  blogs: BlogPost[]
}

export interface BlogDeleteDialogProps {
  blog: BlogPost
  modelValue: boolean
}

export interface BlogImageProps {
  height: string | number
  src: string
  lazySrc: string
  hasHoverEffect?: boolean
}
