import './Liked.css'
import { useContext } from 'react'
import { ProductContext } from '../../context/ProductsContext'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import IconHeart from '../iconHeart/IconHeart'

const cart = <FontAwesomeIcon icon={faShoppingCart} size='2x' />

const Liked = () => {
  const { liked, toggleLike } = useContext(ProductContext)
  return (
    <Container className='pt-5'>
      <h3>Mis Favoritos</h3>
      <div className='d-flex justify-content-center'>
        <div className='m-3 border p-4'>
          {liked.map((like) => (
            <div key={like.id}>
              <div className='d-flex justify-content-between w-100'>
                <div className='d-flex gap-2 justify-content-start align-items-center'>
                  <img src={like.image_url} alt='' style={{ width: '180px', cursor: 'pointer', paddingLeft: '20px' }} /* onClick={() => productoDetails(like.id)} */ />
                  <div className='containerLike'>
                    <h5 className='m-0 text-capitalize'>{like.title}</h5>
                    <h6 className='text-dark'>Precio:{like.price}</h6>
                    <h6 className='text-dark'>Descripción:{like.description}</h6>
                  </div>
                </div>
                <Col md={6} className='d-flex justify-content-end align-items-center'>
                  <div className='text-start'>
                    <Row>
                      <Col>
                        <h5 className='text-dark'>Aqui van los iconos</h5>
                      </Col>
                      <Col>
                        <h5 className='text-success'>{like.price}</h5>
                      </Col>
                      <Col>
                        <section style={{ paddingRight: '20px' }} className='d-flex align-items-center justify-content-end'>
                          <Button onClick={() => { toggleLike(like.id) }}>{like.liked ? <IconHeart filled /> : <IconHeart />}</Button>
                          <Button>{cart}</Button>
                        </section>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </div>
              <hr />
            </div>
          ))}
          {/* <h3>Total: ${totalPizzas}</h3>
          <Button className='btn btn-success' onClick={() => handlePagar(totalPizzas)}>Ir a Pagar</Button> */}
        </div>
      </div>
    </Container>
  )
}

export default Liked