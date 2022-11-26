import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import {useSelector, useDispatch} from 'react-redux'
import { deleteFromCart, clear } from '../rtk/slices/cart-slice'

const Cart = () => {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  return (
    <Container className='pt-5 mt-5'>
      <h1 className='mb-3'>Welcome To Your Cart</h1>
      <Button className='mb-3' onClick={() => dispatch(clear())}>Clear All Cart</Button>
      <h5 className='mb-3'>Total Price: {cart.reduce((acc, produce) => {
        return acc + produce.price
      }, 0)} $</h5>
      <Table striped bordered className='text-center'>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Img</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            cart.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td><Image src={product.image} style={{width: '100px', height: '100px'}} /></td>
                <td>{product.price}$</td>
                <td>
                  <Button variant='danger' onClick={() => dispatch(deleteFromCart(product))}>Delete</Button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </Container>       
  )
}

export default Cart