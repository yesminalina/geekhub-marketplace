import { createContext, useEffect, useState } from 'react'
export const ProductContext = createContext()

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([])

  const liked = products.filter((product) => product.liked)
  const getProducts = async () => {
    const res = await fetch('./json/MOCK_DATA_PRODUCTS.json')
    const data = await res.json()
    setProducts(data)
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
  const globalState = { products, liked, toggleLike }
  return (
    <ProductContext.Provider value={globalState}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductsContextProvider
