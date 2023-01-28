import { ProductModel } from './../types/types'
import { useState, useEffect } from 'react'
import { useAppSelector } from '../redux/app/reduxHooks'
import { productsData } from '../database/data'

export const useCartDetails = () => {
  const [carts, setsCart] = useState<ProductModel[]>([])
  const { cart } = useAppSelector(state => state)
  const [prices, setPrices] = useState<number[]>([])
  const products = productsData
  const [totalPrice, setTotalPrice] = useState<number>(0)

  useEffect(() => {
    let result: ProductModel[] = []
    products &&
      products.forEach((product: ProductModel) => {
        cart.carts.filter((key: string) => {
          let quantity: any = cart.shoppingCartQuantity
          if (product._id == key) {
            product.quantity = quantity[key]
            result.push(product)
          }
        })
      })
    setsCart(result)
  }, [products, cart.carts, cart.shoppingCartQuantity])

  useEffect(() => {
    try {
      let storageCart: any = localStorage.getItem('e-shop-shopping-cart')
      storageCart = JSON.parse(storageCart)
      const cartPrices: number[] =
        carts &&
        carts.map(product => {
          const quantity = storageCart[product._id]
          return product?.price * quantity
        })
      setPrices(cartPrices)

      const initialValue: number = 0
      if (cartPrices?.length >= 1) {
        const sumReduce = cartPrices.reduce(
          (previous: number, current: number) => previous + current,
          initialValue
        )
        setTotalPrice(sumReduce)
      }
    } catch (error: any) {
      console.log(error?.message)
    }
  }, [carts])

  return { carts, setsCart, prices, setPrices, totalPrice, setTotalPrice }
}
