import Carousel from 'react-bootstrap/Carousel'
import img1 from '../../assets/img/img1.webp'
import img2 from '../../assets/img/img2.jpg'
import img3 from '../../assets/img/img3.webp'
import './Header.css'

const Header = () => {
  return (
    <>
      <section className='section-carousel'>
        <Carousel fade>
          <Carousel.Item>
            <img src={img1} alt='img1' className='w-100' />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={img2} alt='img2' className='w-100' />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={img3} alt='img3' className='w-100' />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  )
}

export default Header
