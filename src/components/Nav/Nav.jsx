import React from 'react'
import './Nav.css'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../reducers/cartSlice'

const Nav = () => {
    const showCart = () => {
        dispatch(cartActions.showCart())
    }
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.cart);
    return (
        <div className='nav'>
            <div className='logo'>Logo</div>
            <div className='shopping_cart_btn' onClick={() => showCart()}>Shopping cart : {cart.length}  item</div>
        </div>
    )
}

export default Nav