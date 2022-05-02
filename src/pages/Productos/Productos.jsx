import React, { useState, useEffect } from 'react'
import Product from '../../components/Product/Product';
import {Grid} from '@mui/material';

const Productos = () => {

  const baseUrl = process.env.REACT_APP_API_URL;

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}products`)
    .then(res => res.json())
    .then(products => setProducts(products));
  },[baseUrl]);  

  return (
    <div className='products'>
      <Grid container align="center" justifyContent="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
      {/* <Grid container spacing={2} justifyItems='center' justifyContent='center' align='center'> */}
 
        {products.map(product =>{
          return (
          <Grid item xs={2} sm={4} md={3} key={product.id}>
          {/* //<Grid item xs={4} alignContent='center' justifyContent='center' key={product.id}> */}

           <Product key={product.id}
              id = {product.id}
              description = {product.description}
              image = {product.image}
              name = {product.name}
              price = {product.price}
              stars = {product.stars}
            />
          </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default Productos