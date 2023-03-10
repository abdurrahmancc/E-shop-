const eShoppingCart = 'e-shop-shopping-cart'

/*--------- get all Carts -----------*/
export const getCarts = async () => {
  try {
    let shoppingCartQuantity: {} = {}
    const storageWishlist = localStorage.getItem(eShoppingCart)
    if (storageWishlist) {
      shoppingCartQuantity = JSON.parse(storageWishlist)
    }
    const keys = Object?.keys(shoppingCartQuantity || {})
    return { keys, shoppingCartQuantity }
  } catch (error: any) {
    console.log(error?.message)
  }
}

/*--------- delete Cart -----------*/
export const deleteCart = async (id: string) => {
  try {
    const storedCart = localStorage.getItem(eShoppingCart)
    if (storedCart) {
      const shoppingCart = await JSON.parse(storedCart)
      if (id in shoppingCart) {
        delete shoppingCart[id]
        localStorage.setItem(eShoppingCart, JSON.stringify(shoppingCart))
        const keys = Object?.keys(shoppingCart || {})
        return keys
      }
    }
  } catch (error: any) {
    console.log(error?.message)
  }
}

/*----------- delete All Shopping Cart  --------------*/
export const deleteCarts = () => {
  localStorage.removeItem(eShoppingCart)
  const data: [] = []
  return data
}

/*--------- add to Cart -----------*/
export const addCart = async (id: string) => {
  try {
    let shoppingCart: any = {}
    const storedCart = localStorage.getItem(eShoppingCart)
    if (storedCart) {
      shoppingCart = JSON.parse(storedCart)
    }
    // add quantity
    const quantity = shoppingCart[id]
    let _id = ''
    if (quantity) {
      const newQuantity = quantity + 1
      shoppingCart[id] = newQuantity
      _id = ''
    } else {
      shoppingCart[id] = 1
      _id = id
    }
    localStorage.setItem(eShoppingCart, JSON.stringify(shoppingCart))
    return _id
  } catch (error: any) {
    console.log(error?.message)
  }
}

/*--------- add to Cart quantity -----------*/
export const setCartQuantityToDb = async (data: any) => {
  const { id, quantity } = data
  try {
    if (quantity < 1) {
      return
    }

    let shoppingCart: any = {}
    const storedCart = localStorage.getItem(eShoppingCart)
    if (storedCart) {
      shoppingCart = JSON.parse(storedCart)
      shoppingCart[id] = quantity
      localStorage.setItem(eShoppingCart, JSON.stringify(shoppingCart))
      return quantity
    }
  } catch (error: any) {
    console.log(error?.message)
  }
}
