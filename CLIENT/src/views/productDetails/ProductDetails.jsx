import './ProductDetails.css'
import React, { useState } from 'react'
import { Container, Col, Card, Button } from 'react-bootstrap'
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
  const [selectedImage, setSelectedImage] = useState(img1)
  const handleChangeImage = (image) => {
    setSelectedImage(image)
  }

  return (
    <Container className='pdcontainer'>
      <Card>
        <Card.Body className='wholespace'>
          <Col md={1} className='miniatures'>
            <img
              src={img1}
              className='img-thumbnail'
              alt='Miniatura 1'
              onClick={() => handleChangeImage(img1)}
            />
            <img
              src={img2}
              className='img-thumbnail'
              alt='Miniatura 2'
              onClick={() => handleChangeImage(img2)}
            />
            <img
              src={img3}
              className='img-thumbnail'
              alt='Miniatura 3'
              onClick={() => handleChangeImage(img3)}
            />
          </Col>
          <Col md={6} className='text-center mb-3 mb-md-0'>
            <img src={selectedImage} className='img-fluid' alt='Imagen grande' />
          </Col>
          <Col md={3} className='details'>
            <section className='icons'>
              <Button type='button' className='action'>{share}</Button>
              <Button type='button' className='action'>{heart}</Button>
              <Button type='button' className='action'>{add}</Button>
            </section>
            <Card.Title>Nombre</Card.Title>
            <StarRating totalStars={5} />
            <Card.Text className='description'>Descripción del producto o información adicional aquí</Card.Text>
            <Card.Text className='price'>$50.000</Card.Text>
            <Button type='button'>Agregar al carrito</Button>
          </Col>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default ProductDetails
