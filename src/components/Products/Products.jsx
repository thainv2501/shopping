import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../reducers/cartSlice';
import "./Products.css"
const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const cart = useSelector((state) => state.cart.cart)
    console.log(products)
    return <div className='products_container'>
        <h1>Products</h1>
        <div className='products'>
            {products.map((product, index) => (
                <div key={index} className='product_item'>
                    <div className='product_img' ><img src={product.thumbnail} alt="" /> </div>
                    <div className='product_info'>
                        <p className='name'>{product.title}</p>
                        <h4 className='price'>$ {product.price}</h4>
                    </div>

                    {
                        cart.some(c => c.product.id === product.id) ?
                            (<button className='btn red' onClick={() => {
                                dispatch(cartActions.removeFromCart(product))
                            }}>
                                Remove to cart
                            </button>)
                            :
                            (<button className='btn green' onClick={() => {
                                dispatch(cartActions.addToCart({ product, quantity: 1 }))
                            }}>
                                Add to cart
                            </button>)
                    }


                </div>
            )
            )}

        </div>
    </div>
}

export default Products