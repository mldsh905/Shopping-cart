import React, {useState} from 'react';
import ShopItem from "./ShopItem";
import {nanoid} from "nanoid";
import './shop.css'


const Shop = (props) => {
    return (
        <div className='shop-container'>
            {props.items.map(e=>{
                return (
                    <ShopItem key={e.id} props={e} />
                )
            })}
        </div>
    );
};

export default Shop;