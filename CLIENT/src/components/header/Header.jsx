import './Header.css'
import Carousel from 'react-bootstrap/Carousel'
import catBoard from '../../assets/img/cat-board.jpg'
import catTCG from '../../assets/img/cat-tcg.webp'
import catFigures from '../../assets/img/cat-figures.jpg'
import catComics from '../../assets/img/cat-comics.jpg'
import catAlbums from '../../assets/img/cat-albums.png'

const Header = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item interval={2200}>
          <img src={catBoard} alt='img1' />
          <Carousel.Caption>
            <h3>Juegos de Mesa</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2200}>
          <img src={catTCG} alt='img2' />
          <Carousel.Caption>
            <h3>TCG</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2200}>
          <img src={catFigures} alt='img3' />
          <Carousel.Caption>
            <h3>Figuras Coleccionables</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2200}>
          <img src={catComics} alt='img4' />
          <Carousel.Caption>
            <h3>Mangas y Cómics</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2200}>
          <img src={catAlbums} alt='img5' />
          <Carousel.Caption>
            <h3>Álbumes y Láminas</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Header
