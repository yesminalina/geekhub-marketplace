import './ProductDetails.css'
import React, { useState } from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import StarRating from '../../components/startRating/StarRating'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faShareAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
// import img1 from '../../assets/img/img1.webp'
// import img2 from '../../assets/img/img4.jpg'
// import img3 from '../../assets/img/img3.webp'

const heart = <FontAwesomeIcon icon={faHeart} size='1x' />
const share = <FontAwesomeIcon icon={faShareAlt} size='1x' />
const add = <FontAwesomeIcon icon={faShoppingCart} size='1x' />

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(img1)
  const handleChangeImage = (image) => {
    setSelectedImage(image)
  }

  return (
    <Container className='pdcontainer'>
      <Card className='principal-box'>
        <Card.Body className='wholespace'>
          <div className='miniatures'>
            <img
              src={img1}
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
            <img src={selectedImage} className='big-img' alt='Imagen grande' />
          </div>
          <div className='details'>
            <section className='icons'>
              <Button type='button' className='action'>{share}</Button>
              <Button type='button' className='action'>{heart}</Button>
              <Button type='button' className='action'>{add}</Button>
            </section>
            <Card.Title className='title-name'>Nombre</Card.Title>
            <StarRating totalStars={5} />
            <Card.Text className='description'>Descripción del producto o información adicional aquí</Card.Text>
            <Card.Text className='price'>$50.000</Card.Text>
            <Button type='button'>Agregar al carrito</Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default ProductDetails
