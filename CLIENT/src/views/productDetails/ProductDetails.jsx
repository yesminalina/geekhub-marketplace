import './ProductDetails.css'
import { useState, useContext, useEffect } from 'react'
import { ProductContext } from '../../context/ProductsContext'
import { CartContext } from '../../context/CartContext'
import { useParams } from 'react-router-dom'
import { Container, Card, Button } from 'react-bootstrap'
import StarRating from '../../components/startRating/StarRating'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faShareAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import img1 from '../../assets/img/img1.webp'
import img2 from '../../assets/img/img2.jpg'
import img3 from '../../assets/img/img3.webp'

const heart = <FontAwesomeIcon icon={faHeart} size='1x' />
const share = <FontAwesomeIcon icon={faShareAlt} size='1x' />
const add = <FontAwesomeIcon icon={faShoppingCart} size='1x' />

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState([])
  const handleChangeImage = (image) => {
    setSelectedImage(image)
  }

  const { id } = useParams()
  const { products } = useContext(ProductContext)
  const { addToCart } = useContext(CartContext)

  useEffect(() => {
    const ProductsData = products.find((product) => product.id === +id)
    setSelectedImage(ProductsData ?? [])
  }, [])

  return (
    <Container className='pdcontainer'>
      <Card className='principal-box'>
        <Card.Body className='wholespace'>
          <div className='miniatures'>
            <img
              src={selectedImage.image_url}
              className='mini-img'
              alt='Miniatura 1'
              onClick={() => handleChangeImage(img1)}
            />
            <img
              src={img2}
              className='mini-img'
              alt='Miniatura 2'
              onClick={() => handleChangeImage(img2)}
            />
            <img
              src={img3}
              className='mini-img'
              alt='Miniatura 3'
              onClick={() => handleChangeImage(img3)}
            />
          </div>
          <div id='big-photo'>
            <img src={selectedImage.image_url} className='big-img' alt='Imagen grande' />
          </div>
          <div className='details'>
            <section className='icons'>
              <Button type='button' className='action'>{share}</Button>
              <Button type='button' className='action'>{heart}</Button>
              <Button type='button' className='action'>{add}</Button>
            </section>
            <Card.Title className='title-name'>{selectedImage.title}</Card.Title>
            <StarRating totalStars={5} />
            <Card.Text className='description'>{selectedImage.description}</Card.Text>
            <Card.Text className='price'>${selectedImage.price}</Card.Text>
            <Button type='button' onClick={() => addToCart(selectedImage)}>Agregar al carrito</Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default ProductDetails
