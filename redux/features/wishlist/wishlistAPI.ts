import { ProductModel } from '../../../types/types'

const eShopWishlist = 'e-shop-wishlist'

/*--------- get all wishlist -----------*/
export const getWishlist = async () => {
  try {
    let wishlist: ProductModel | {} = {}
    const storageWishlist = localStorage.getItem(eShopWishlist)
    if (storageWishlist) {
      wishlist = JSON.parse(storageWishlist)
    }
    const keys = Object?.keys(wishlist || {})
    return keys
  } catch (error: any) {
    console.log(error?.message)
  }
}

/*--------- delete wishlist -----------*/
export const deleteWishlist = async (id: string) => {
  try {
    const storedWishlist = localStorage.getItem(eShopWishlist)
    if (storedWishlist) {
      const wishlist = await JSON.parse(storedWishlist)
      if (id in wishlist) {
        delete wishlist[id]
        localStorage.setItem(eShopWishlist, JSON.stringify(wishlist))
        const keys = Object?.keys(wishlist || {})
        return keys
      }
    }
  } catch (error: any) {
    console.log(error?.message)
  }
}

/*--------- add to wishlist -----------*/
export const addWishlist = async (id: string) => {
  try {
    let wishlist: any = {}
    const storedWishlist = localStorage.getItem(eShopWishlist)
    if (storedWishlist) {
      wishlist = JSON.parse(storedWishlist)
    }
    // add quantity
    const quantity = wishlist[id]
    let _id = ''
    if (quantity) {
      const newQuantity = quantity + 1
      wishlist[id] = newQuantity
      _id = ''
    } else {
      wishlist[id] = 1
      _id = id
    }
    localStorage.setItem(eShopWishlist, JSON.stringify(wishlist))
    return _id
  } catch (error: any) {
    console.log(error?.message)
  }
}

/*----------- delete All wishlist   --------------*/
export const deleteAllWishlist = () => {
  localStorage.removeItem(eShopWishlist)
  const data: [] = []
  return data
}
