import './Favorites.css'
import { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import Liked from '../../components/Liked/Liked'
import { Button } from 'react-bootstrap'

const Favorites = () => {
  const { liked } = useContext(ProductsContext)
  console.log(liked)
  return (
    <div className='fav'>
      {liked.length ? <Liked /> : <div><h3>Agrega tus productos favoritos de la tienda</h3><Button id='goStore'>ir a la tienda</Button></div>}
    </div>
  )
}
export default Favorites
