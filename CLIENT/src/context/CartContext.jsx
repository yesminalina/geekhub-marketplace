import { createContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  const addNotify = () => {
    toast.success('Producto agregado', {
      position: 'bottom-right',
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored'
    })
  }

  const removeNotify = () => {
    toast.error('Producto eliminado', {
      position: 'bottom-right',
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored'
    })
  }
  const addToCart = (product) => {
    const itemInCart = cart.find((item) => item.id === product.id)
    if (itemInCart) {
      setCart(cart.map((item) => {
        if (item.stock > item.qty) {
          addNotify()
          return item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        } else {
          return item.id === product.id ? { ...item, qty: item.qty } : item
        }
      }))
    } else {
      addNotify()
      setCart([...cart, { id: product.id, imageUrl: product.imageUrl, title: product.title, description: product.description, price: product.price, stock: product.stock, qty: 1 }])
    }
  }

  const removeFromCart = (product) => {
    removeNotify()
    const newCart = [...cart]
    const index = newCart.findIndex((item) => item.id === product.id)
    if (newCart[index].qty > 1) {
      newCart[index] = { ...newCart[index], qty: newCart[index].qty - 1 }
      setCart(newCart)
    } else {
      setCart(newCart.filter((item) => item.id !== product.id))
    }
  }

  const removeItemFromCart = (product) => {
    removeNotify()
    const newCart = [...cart]
    setCart(newCart.filter((item) => item.id !== product.id))
  }

  const getTotal = () => {
    setTotal(cart.reduce((acc, item) => (acc + (item.price * item.qty)), 0))
  }

  useEffect(() => {
    // const newCart = cart.filter((item) => products.some((product) => product.id === item.id))
    // setCart(newCart)
    // const compare = cart.filter((item) => item.id === products.id)
    // console.log(compare)
  }, [])

  const fnCart = (cart) => setCart(cart)
  const globalState = { cart, total, getTotal, addToCart, removeFromCart, removeItemFromCart, fnCart, removeNotify }

  return (
    <CartContext.Provider value={globalState}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
