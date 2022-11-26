import { useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../rtk/slices/products-slice"
import Cart from "./Cart"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addToCart } from '../rtk/slices/cart-slice'


const Products = () => {
  const products = useSelector(state => state.products)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <Row>
      {
        products.map((product) => (
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>{product.price}$</Card.Text>
                <Button variant="primary" onClick={() => dispatch(addToCart(product))}>Add To Cart</Button>
              </Card.Body>
            </Card>   
          </Col>  
        ))
      }
    </Row>
  )
}

export default Products