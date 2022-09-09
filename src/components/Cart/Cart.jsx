import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../reducers/cartSlice";
import "./Cart.css"


const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.cart);
    console.log(cart)
    const [total, setTotal] = useState(0)
    const changeQuantity = (id, qty) => {
        dispatch(cartActions.changeCartQuantity({ id, qty }))
    }

    useEffect(() => {
        setTotal(cart.reduce((previousTotal, currentValue) => {
            return previousTotal + (currentValue.product.price * currentValue.quantity);
        }, 0))

        return () => {
            console.log("cart changed quantity, total change , now run ")
        }
    }, [cart])


    return (
        <div className='cart'>Cart
            <div className=''>
                <h3>Total : {total} $</h3>
            </div>
            {cart.map((c, index) => (
                <div key={index} className='cart_item'>
                    <div className='cart_img'><img src={c.product.thumbnail} alt="" /></div>
                    <div className='cart_info'>
                        <p>{c.product.title}</p>
                        <h4>$ {c.product.price}</h4>
                    </div>
                    <div>
                        <button className='btn green' onClick={() => changeQuantity(c.product.id, c.quantity + 1)}> + </button>
                        <p>{c.quantity}</p>
                        <button className='btn red' onClick={() => changeQuantity(c.product.id, c.quantity - 1)}> - </button>

                    </div>

                </div>
            ))}
        </div>
    )
}

export default Cart