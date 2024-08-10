import './StarRating.css'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { URLBASE } from '../../config/constants'

const StarRating = ({ totalStars = 5, id }) => {
  const [rating, setRating] = useState(0)

  const handleClick = async (value) => {
    await axios.put(`${URLBASE}/product-details/score/${id}`, { score: value })
    setRating(value)
  }

  const getScore = async () => {
    const response = await axios.get(`${URLBASE}/product-details/score/${id}`)
    setRating(response.data.message[0].score)
  }

  useEffect(() => {
    getScore()
  }, [])

  return (
    <div className='star-rating'>
      {[...Array(totalStars)].map((star, index) => {
        const value = index + 1
        return (
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            className={value <= rating ? 'star selected' : 'star'}
            onClick={() => handleClick(value)}
          />
        )
      })}
    </div>
  )
}

export default StarRating
