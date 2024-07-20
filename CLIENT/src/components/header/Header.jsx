import './Header.css'
import Carousel from 'react-bootstrap/Carousel'
import img1 from '../../assets/img/img1.webp'
import img2 from '../../assets/img/img2.jpg'
import img3 from '../../assets/img/img3.webp'

const Header = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item interval={2200}>
          <img src={img1} alt='img1' />
          <Carousel.Caption>
            <h3>Juegos de Mesa</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2200}>
          <img src={img2} alt='img2' />
          <Carousel.Caption>
            <h3>TCG</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2200}>
          <img src={img3} alt='img3' />
          <Carousel.Caption>
            <h3>Figuras Coleccionables</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2200}>
          <img src={img3} alt='img4' />
          <Carousel.Caption>
            <h3>Mangas y Cómics</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2200}>
          <img src={img3} alt='img5' />
          <Carousel.Caption>
            <h3>Albumes y Laminas</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Header
