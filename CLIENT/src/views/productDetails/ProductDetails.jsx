import './ProductDetails.css'
import { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import { CartContext } from '../../context/CartContext'
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Card, Button } from 'react-bootstrap'
import StarRating from '../../components/startRating/StarRating'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import IconHeart from '../../components/iconHeart/IconHeart'

const add = <FontAwesomeIcon icon={faShoppingCart} size='2x' />

const ProductDetails = () => {
  const { id } = useParams()
  const { products, toggleLike } = useContext(ProductsContext)
  const { addToCart } = useContext(CartContext)
  const navigate = useNavigate()
  const ProductsData = products.find((product) => product.id === +id)

  return (
    <Container className='pdcontainer'>
      <Card className='principal-box'>
        <Card.Body className='wholespace'>
          <div id='big-photo'>
            <img src={ProductsData.image_url} className='big-img' alt='Imagen grande' />
          </div>
          <div className='details'>
            <section className='icons'>
              <div className='action' onClick={() => toggleLike(ProductsData.id)}>{ProductsData.liked ? <IconHeart filled /> : <IconHeart />}</div>
              <div className='action' onClick={() => { addToCart(ProductsData); navigate('/cart') }}>{add}
              </div>
            </section>
            <Card.Title className='title-name'>{ProductsData.title}</Card.Title>
            <StarRating totalStars={5} />
            <Card.Text className='description'>{ProductsData.description}</Card.Text>
            <Card.Text className='price'>${ProductsData.price}</Card.Text>
            <Button id='addCart' type='button' onClick={() => addToCart(ProductsData)}>Agregar al carrito</Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default ProductDetails
