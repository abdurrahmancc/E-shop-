export interface CategoryItemsTypes {
  _id: string
  name: string
  features: string[]
  img: string
}

export type BreadcrumbModel = {
  label: string
  value: string
}

export interface ProductModel {
  _id: string
  name: string
  fullName: string
  price: number
  regularPrice: number
  quantity: number
  reviewQuantity: number
  category: string
  subCategory: string
  date?: string
  status: string
  img: string[]
  review: number
  description: string
  badge: string
  updatedAt: string
  createdAt: string
  model: string
  SKU: string
  shortFeatures: string[]
  Specification: any[]
}

export interface BlogsModel {
  _id: String
  title: String
  category: String
  img: any
  tags: String[]
  description: String
}
