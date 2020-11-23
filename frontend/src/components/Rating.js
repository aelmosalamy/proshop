import React from 'react'
import PropTypes from 'prop-types'

const Rating = ({ value, text, color }) => {
  let stars = []
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span key={i}>
        <i
          style={{ color }}
          className={
            value >= i + 1
              ? 'fas fa-star'
              : value >= i + 0.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
    )
  }

  return (
    <div className='rating'>
      <span className='rating__stars'>{stars}</span>
      <span className='rating__text'>{text}</span>
    </div>
  )
}

Rating.defaultProps = {
  color: '#da2b0f',
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  string: PropTypes.string,
}

export default Rating
