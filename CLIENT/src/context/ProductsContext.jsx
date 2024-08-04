import { createContext, useEffect, useState, useContext } from 'react'
import { UserContext } from './UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const ProductsContext = createContext()

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [filterProducts, setFilterProducts] = useState(products)

  const { isAuthenticated } = useContext(UserContext)
  const navigate = useNavigate()

  const liked = products.filter((product) => product.liked)

  const getProducts = () => {
    axios.get('./products')
      .then(({ data }) => {
        setProducts(data.data)
      })
  }

  useEffect(() => {
    getProducts()
  }, [])

  const toggleLike = (id) => {
    if (isAuthenticated) {
      const newProducts = products.map((product) => {
        if (product.id === id) {
          return ({ ...product, liked: !product.liked })
        }
        return product
      })
      setProducts(newProducts)
    } else {
      navigate('/register')
    }
  }

  const createProduct = () => {
    toast.info('Producto creado exitosamente', {
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

  const fnProducts = (product) => setProducts(product)
  const fnFilterProducts = (product) => setFilterProducts(product)

  const globalState = { products, filterProducts, fnProducts, fnFilterProducts, getProducts, liked, toggleLike, createProduct }

  return (
    <ProductsContext.Provider value={globalState}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsContextProvider
