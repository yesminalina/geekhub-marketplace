import { createContext, useEffect, useState } from 'react'
export const ProductsContext = createContext()

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [filterProducts, setFilterProducts] = useState(products)

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
  const globalState = { products, liked, toggleLike, filterProducts, setFilterProducts }

  return (
    <ProductsContext.Provider value={globalState}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsContextProvider
