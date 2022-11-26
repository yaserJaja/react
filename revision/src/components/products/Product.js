import './Product.css'

const Product = (props) => {
  return (
    <div className="product">
      <div className='container'>
        <div className="image">
          <img src={props.product.image} alt="" />
        </div>
        <div className="text">
          <h2 className="title">{props.product.title}</h2>
          <h6 className="category my-3">Category: {props.product.category}</h6>
          <p className="description">{props.product.description}</p>
          <div className="price">Price: {props.product.price}$</div>
          <div>Rate: {props.product.rating.rate}</div>
          <div>Count: {props.product.rating.count}</div>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Product