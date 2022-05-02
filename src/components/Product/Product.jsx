import React from 'react'
import { Button } from '@mui/material';
import StarRatings from 'react-star-ratings/build/star-ratings';

const Product = ({id, description, image, name, price, stars}) => {
  return (
    <div className='product'>
        <img src={image} alt={name}/>
        <p>{description}</p>
        <h3>${price}</h3>
        <span><StarRatings
            rating={stars}
            starRatedColor='orange'
            starDimension='15px'
            starSpacing='1px'
         />
        </span>
        <span>{stars}</span><Button color='primary' variant='outlined'>Buy</Button>
    </div>
  )
}

export default Product