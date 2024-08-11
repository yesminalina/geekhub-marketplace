import './Liked.css'
import { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import { UserContext } from '../../context/UserContext'
import { CartContext } from '../../context/CartContext'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import IconHeart from '../iconHeart/IconHeart'
import { useNavigate } from 'react-router-dom'

const cart = <FontAwesomeIcon icon={faShoppingCart} size='3x' />

const Liked = () => {
  const { liked, removeLike } = useContext(ProductsContext)
  const { activeUser } = useContext(UserContext)
  const { addToCart } = useContext(CartContext)
  const navigate = useNavigate()
  console.log(liked[0])

  return (
    <Container className='pt-5'>
      <h1>Mis Favoritos</h1>
      <div className='d-flex justify-content-center'>
        <div className='likeContainer m-3 border p-4'>
          {liked.map((like) => (
            <div key={like.id}>
              <div className='wholeLike d-flex justify-content-between w-100'>
                <div className='d-flex gap-2 justify-content-start align-items-center'>
                  <img src={like.image_url} alt='' style={{ width: '180px', cursor: 'pointer', paddingLeft: '20px' }} onClick={() => navigate(`/product-details/${like.id}`)} />
                  <div className='containerLike'>
                    <h5 className='m-0 text-capitalize'>{like.title}</h5>
                    <h6 className='text-dark'>Precio:${like.price.toLocaleString('es-CL')}</h6>
                    <h6 className='likeDescription text-dark'>Descripción:{like.description}</h6>
                  </div>
                </div>
                <Col md={6} className='d-flex justify-content-center align-items-center'>
                  <div className='text-start'>
                    <Row>
                      <Col>
                        <section style={{ paddingRight: '20px' }} className='d-flex align-items-center justify-content-end'>
                          <Button onClick={() => { removeLike(activeUser.id, like.productid) }}>{like.liked ? <IconHeart filled /> : <IconHeart />}</Button>
                          <Button onClick={() => addToCart(like)}>{cart}</Button>
                        </section>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default Liked
