import './Product.css'
import Button from './Button'

const Product = (props) => {
    let product = props.product

    const onDeleteButtonClick = () => {
        props.onDeleteAction(product.id);
    }

    return(
            <div className='containerProduct'>
                <div className='containerProductNames'>
                   <h4>{product.name}</h4>
                   <p>Price: {product.price}</p>
                   <p>Amount: {product.amount}</p>
                   <Button  title='Delete' action={onDeleteButtonClick}/>
                </div>
  
            </div>
    )
}

export default Product;