import './Favorites.css'
import { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import Liked from '../../components/Liked/Liked'

const Favorites = () => {
  const { liked } = useContext(ProductsContext)
  return (
    <div className='fav'>
      {liked.length ? <Liked /> : <div><h3>Agrega tus productos favoritos de la tienda</h3></div>}
    </div>
  )
}
export default Favorites
