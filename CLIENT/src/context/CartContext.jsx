import { createContext, useState } from 'react'

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  const addToCart = (product) => {
    const itemInCart = cart.find((item) => item.id === product.id)
    if (itemInCart) {
      setCart(cart.map((item) => {
        return item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      }))
    } else {
      setCart([...cart, { id: product.id, image_url: product.image_url, title: product.title, description: product.description, price: product.price, qty: 1 }])
    }
  }

  const removeFromCart = (productId) => {
    const newCart = [...cart]
    const index = newCart.findIndex((item) => item.id === productId)
    if (newCart[index].qty > 1) {
      newCart[index] = { ...newCart[index], qty: newCart[index].qty - 1 }
      setCart(newCart)
    } else {
      setCart(newCart.filter((item) => item.id !== productId))
    }
  }

  const getTotal = () => {
    setTotal(cart.reduce((acc, item) => (acc + (item.price * item.qty)), 0))
  }

  const globalState = { cart, total, getTotal, addToCart, removeFromCart }

  return (
    <CartContext.Provider value={globalState}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
