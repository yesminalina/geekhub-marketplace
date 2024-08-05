import './Favorites.css'
import { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import Liked from '../../components/Liked/Liked'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Favorites = () => {
  const navigate = useNavigate()
  const { liked } = useContext(ProductsContext)

  return (
    <div className='fav'>
      {liked.length ? <Liked /> : <div><h3>Agrega tus productos favoritos de la tienda</h3><Button id='goStore' onClick={() => navigate('/catalogue')}>ir a la tienda</Button></div>}
    </div>
  )
}
export default Favorites
