import { Button } from 'react-bootstrap'
import IconHeart from '../iconHeart/IconHeart'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { URLBASE } from '../../config/constants'
import { useNavigate } from 'react-router-dom'
import { ProductsContext } from '../../context/ProductsContext'

const LikeButton = ({ productId, userId }) => {
  const { getFavorites } = useContext(ProductsContext)
  const [isLiked, setIsLiked] = useState(false)
  const token = window.sessionStorage.getItem('token')
  const navigate = useNavigate()

  useEffect(() => {
    const checkFavoriteStatus = async () => {
      try {
        if (userId) {
          const response = await axios.get(`${URLBASE}/is-favorite/${userId}/${productId}`, { headers: { Authorization: `Bearer ${token}` } })
          const { is_favorite: isFavorite } = response.data.message[0]
          setIsLiked(isFavorite)
        } else {
          setIsLiked(false)
        }
      } catch (error) {
        console.error('Error al verificar el estado de favoritos', error)
      }
    }
    checkFavoriteStatus()
  }, [userId, productId])

  const toggleLike = async () => {
    try {
      if (isLiked) {
        // Si ya es favorito, eliminarlo
        await axios.delete(`${URLBASE}/favorites/${userId}/`, { data: { productId }, headers: { Authorization: `Bearer ${token}` } })
      } else {
        // Si no es favorito, agregarlo
        await axios.post(`${URLBASE}/favorites/${userId}/`, { productId }, { headers: { Authorization: `Bearer ${token}` } })
      }
      // Cambiar el estado después de la operación
      setIsLiked(!isLiked)
    } catch (error) {
      console.error('Error al actualizar favoritos', error)
    }
    getFavorites(userId)
  }

  return (
    <Button onClick={() => { userId ? toggleLike(userId, productId) : navigate('/register') }}>{isLiked ? <IconHeart filled /> : <IconHeart />}</Button>
  )
}
export default LikeButton
