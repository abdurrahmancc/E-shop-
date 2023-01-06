import { ProductModel } from '../../../types/types'

const eShopCompare = 'e-shop-compare'

/*--------- get all compare -----------*/
export const getCompare = async () => {
  try {
    let compare: ProductModel | {} = {}
    const storageCompare = localStorage.getItem(eShopCompare)
    if (storageCompare) {
      compare = JSON.parse(storageCompare)
    }
    const keys = Object.keys(compare)
    return keys
  } catch (error: any) {
    console.log(error?.message)
  }
}

/*--------- delete compare -----------*/
export const deleteCompare = async (id: string) => {
  try {
    const storedCompare = localStorage.getItem(eShopCompare)
    if (storedCompare) {
      const compare = await JSON.parse(storedCompare)
      if (id in compare) {
        delete compare[id]
        localStorage.setItem(eShopCompare, JSON.stringify(compare))
        const keys = Object.keys(compare)
        return keys
      }
    }
  } catch (error: any) {
    console.log(error?.message)
  }
}

/*--------- add to compare -----------*/
export const addCompare = async (id: string) => {
  try {
    let compare: any = {}
    const storedCompare = localStorage.getItem(eShopCompare)
    if (storedCompare) {
      compare = JSON.parse(storedCompare)
    }
    // add quantity
    const quantity = compare[id]
    let _id = ''
    if (quantity) {
      const newQuantity = quantity + 1
      compare[id] = newQuantity
      _id = ''
    } else {
      compare[id] = 1
      _id = id
    }
    localStorage.setItem(eShopCompare, JSON.stringify(compare))
    return _id
  } catch (error: any) {
    console.log(error?.message)
  }
}

/*----------- delete All compare   --------------*/
export const deleteAllCompare = () => {
  localStorage.removeItem(eShopCompare)
  const data: [] = []
  return data
}
