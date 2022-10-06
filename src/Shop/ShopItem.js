import React from 'react';
import {NavLink, Navigate} from 'react-router-dom';
import './shop.css'

const ShopItem = (props) => {
    return (
        <NavLink to={`/items/${props.props.link}`}>
            <div className='shop-items'>
                <img src={props.props.src} alt=""/>
                <div className='shop-info'>
                    <div>{props.props.name}</div>
                    <div>${props.props.price}</div>
                </div>
            </div>
        </NavLink>
    )
        ;
};


export default ShopItem;