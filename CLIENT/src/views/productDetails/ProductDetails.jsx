import './ProductDetails.css'
import { useContext, useState, useEffect } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import { CartContext } from '../../context/CartContext'
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Card, Button, Row, Col } from 'react-bootstrap'
import StarRating from '../../components/startRating/StarRating'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import IconHeart from '../../components/iconHeart/IconHeart'
import { URLBASE } from '../../config/constants'
import axios from 'axios'

const add = <FontAwesomeIcon icon={faShoppingCart} size='2x' />

const ProductDetails = () => {
  const { id } = useParams()
  const { toggleLike, products } = useContext(ProductsContext)
  const { addToCart } = useContext(CartContext)
  const [product, setProduct] = useState({
    title: '',
    description: '',
    // stock: '',
    price: '',
    imageUrl: '',
    score: 0,
    liked: false
  })

  const navigate = useNavigate()

  const getProductDetails = () => {
    axios.get(`${URLBASE}/product-details/${id}`)
      .then((response) => {
        console.log(response.data.message)
        setProduct({ ...response.data.message[0], id: +id })
        console.log(product)
      })
  }

  useEffect(() => {
    getProductDetails()
  }, [])
  const { liked, title, description, stock, price, image_url: imageUrl } = product
  // liked debería venir de la respuesta del back, haciendo un join con la tabla favoritos
  const ProductsData = products.find((product) => product.id === +id)

  return (
    <Container className='pdcontainer'>
      <Card className='principal-box'>
        <Card.Body className='wholespace'>
          <div id='big-photo'>
            <img src={imageUrl} className='big-img' alt='Imagen grande' />
          </div>
          <div className='details'>
            <section className='icons'>
              {/* liked debe venir de products (respuesta back) después de crear tabla favorites */}
              <div className='action' onClick={() => toggleLike(ProductsData.id)}>{ProductsData.liked ? <IconHeart filled /> : <IconHeart />}</div>
              <div className='action' onClick={() => { addToCart(product); navigate('/cart') }}>{add}
              </div>
            </section>
            <Card.Title className='title-name'>{title}</Card.Title>
            <StarRating totalStars={5} id={id} />
            <Card.Text className='description'>{description}</Card.Text>
            <Row className='count'>
              <Col>
                <Card.Text className='stock'>Stock:{stock} Unidades</Card.Text>
              </Col>
              <Col>
                <Card.Text className='price'>${price.toLocaleString('es-CL')}</Card.Text>
              </Col>
            </Row>
            <Button id='addCart' type='button' onClick={() => addToCart(product)}>Agregar al carrito</Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default ProductDetails
