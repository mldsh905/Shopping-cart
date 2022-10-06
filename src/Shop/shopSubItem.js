import React from 'react';
import './shop.css';
import {NavLink} from "react-router-dom";
import {nanoid} from "nanoid";

const ShopSubItem = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        let try0 = false;
        props.cart.forEach(a => {
            if (a.name === props.props.name) try0 = true
        })
        if (try0 === true) {
            props.setCart(
                props.cart.map(item => {
                    if (item.name === props.props.name) {
                        return (
                            {...item, number: Number(item.number) + Number(e.target.children[1].value)}
                        )
                    } else {
                        return item
                    }
                })
            )
        } else {
            props.setCart([...props.cart, {
                id: nanoid(),
                number: e.target.children[1].value,
                name: props.props.name,
                price: props.props.price,
                src: props.props.src
            }])
        }
        e.target.children[1].value = '';
    }

    return (
        <div className="shopSubItem">
            <div className='shopSubItem-container'>
                <img src={props.props.src} alt=""/>
                <div className='shopSubItem-intro'>
                    <div className='shopSubItem-intro-name'>{props.props.name}</div>
                    <div className='shopSubItem-intro-price'>${props.props.price}</div>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="number">Number</label>
                        <input type="number" id='number' defaultValue='1' min='1' name='number' required/>
                        <button type='submit'>Add To Cart</button>
                    </form>
                    <div className="shopSubItem-btn">
                        <NavLink to='/shop'>
                            <button>Back</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ShopSubItem;