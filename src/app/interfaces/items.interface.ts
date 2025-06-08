export interface ItemsI {
  products: Product[][]
  comments: Comment[]
  profile: Profile
}

export interface Product {
  id: number
  title: string
  slug: string
  price: number
  description: string
  category: Category
  images: string[]
  creationAt: string
  updatedAt: string
}

export interface Category {
  id: number
  name: string
  slug: string
  image: string
  creationAt: string
  updatedAt: string
}

export interface Comment {
  id: string
  text: string
  postId: string
}

export interface Profile {
  name: string
}
