// StarRating.js
import './StarRating.css'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

const StarRating = ({ totalStars = 5, id }) => {
  const [rating, setRating] = useState(0)

  const handleClick = async (value) => {
    const response = await axios.put(`/products/score/${id}`, value)
    console.log(response)
    setRating(value)
  }

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
