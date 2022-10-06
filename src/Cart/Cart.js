import React, {useState} from 'react';
import './cart.css';

const Cart = (props) => {

    const handleChange = (e) => {
        props.setCart(props.cart.map(item => {
            if (item.id === e.target.parentElement.id) {
                return (
                    {...item, number: e.target.value}
                )
            } else {
                return item
            }
        }))
    }

    let price = 0;
    props.cart.forEach(e => {
        price = price + e.number * e.price
    })

    const handleDelete = (item) => {
        props.setCart(
            props.cart.filter(e=>{
                return e.id !== item.target.parentElement.id
            })
        )
    }

    if (props.cart.length === 0){
        return (
            <div className='cart-empty'>
                <div>
                    The Cart Is Empty~
                </div>
            </div>
        )
    }else{
    return (
        <div className='cart-body'>
            <div className="cart-item">
                {props.cart.map(e => {
                    return (
                        <div className='cart-item-container' key={e.id} id={e.id}>
                            <img src={e.src} alt=""/>
                            <div>{e.name}</div>
                            <div>Price: {e.price}</div>
                            <input min='1' type="number" value={e.number} onChange={handleChange}/>
                            <div>Price All: {e.price * e.number}</div>
                            <button onClick={handleDelete}>Delete</button>
                        </div>
                    )
                })}
                <div className='cart-item-allPrice'>All: ${price}</div>
                <div className='cart-item-continue'>
                    <button onClick={()=>{alert('Under Construction')}}>Continue</button>
                </div>
            </div>
        </div>
    );}
};

export default Cart;