import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'


const Product = ({product}) => {
  return (
    <Card className='my-3 py-3 rounded'>
        <Link to={`/products/${product._id}`}>
            <Card.Img src={product.image} variant='top' />
        </Link>
        <Card.Body>
            <Link to={`/products/${product._id}`}>
                <Card.Title>{ product.name }</Card.Title>
            </Link>
            <Card.Text as = 'div'>
                <Rating value={product.rating} text={`${product.numReviews}条评价`} color = 'red'/>
            </Card.Text>
            <Card.Text as = 'h2'>
                {product.price}
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Product