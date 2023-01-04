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
  price: number
  regularPrice: number
  quantity: number
  reviewQuantity: number
  category: number
  subCategory: string
  date?: string
  status: string
  img: string
  description: string
  badge: string
  updatedAt: string
  createdAt: string
}
