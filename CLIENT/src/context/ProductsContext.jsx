import { createContext, useEffect, useState } from 'react'
import axios from 'axios'
export const ProductsContext = createContext()

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [filterProducts, setFilterProducts] = useState(products)

  const liked = products.filter((product) => product.liked)
  // const getProducts = async () => {
  //   const res = await fetch('./json/MOCK_DATA_PRODUCTS.json')
  //   const data = await res.json()
  //   setProducts(data)
  // }

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
    const newProducts = products.map((product) => {
      if (product.id === id) {
        return ({ ...product, liked: !product.liked })
      }
      return product
    })
    setProducts(newProducts)
  }
  const fnFilterProducts = (product) => setFilterProducts(product)

  const globalState = { products, filterProducts, fnFilterProducts, getProducts, liked, toggleLike }

  return (
    <ProductsContext.Provider value={globalState}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsContextProvider
