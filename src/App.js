import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import About from "./About/About";
import Home from "./Home/Home";
import Shop from "./Shop/Shop";
import Cart from "./Cart/Cart";
import {nanoid} from "nanoid";
import ShopSubItem from "./Shop/shopSubItem";
import {useState} from "react";
import './app.css';

function App() {
    const [items,setItems] = useState([
        {src:'/images/shop/1.jpeg',name: 'Grey Cushion', price: '89', link: '1', id: nanoid()},
        {src:'/images/shop/2.jpeg',name: 'Wood Shelf', price: '198', link: '2', id: nanoid()},
        {src:'/images/shop/3.jpeg',name: 'Small Chair', price: '39', link: '3', id: nanoid()},
        {src:'/images/shop/4.jpeg',name: 'Storage Bed', price: '890', link: '4', id: nanoid()},
        {src:'/images/shop/5.jpeg',name: 'Black Cushion', price: '49', link: '5', id: nanoid()},
        {src:'/images/shop/6.jpeg',name: 'Outdoor Chair', price: '290', link: '6', id: nanoid()},
        {src:'/images/shop/7.jpeg',name: 'Queen-size Bed', price: '690', link: '7', id: nanoid()},
        {src:'/images/shop/8.jpeg',name: 'Curtain', price: '148', link: '8', id: nanoid()},
        {src:'/images/shop/9.jpeg',name: 'Sofa', price: '1190', link: '9', id: nanoid()},
        {src:'/images/shop/10.jpeg',name: 'Bed', price: '990', link: '10', id: nanoid()},
        {src:'/images/shop/11.jpeg',name: 'Paint', price: '29', link: '11', id: nanoid()},
        {src:'/images/shop/12.jpeg',name: 'Rocket Cushion', price: '19', link: '12', id: nanoid()},
        {src:'/images/shop/13.jpeg',name: 'Wood Table', price: '190', link: '13', id: nanoid()},
        {src:'/images/shop/14.jpeg',name: 'Wood Shelf', price: '90', link: '14', id: nanoid()},
        {src:'/images/shop/15.jpeg',name: 'Sofa & Table', price: '990', link: '15', id: nanoid()},
        {src:'/images/shop/16.jpeg',name: 'Sofa-2', price: '590', link: '16', id: nanoid()},
        {src:'/images/shop/17.jpeg',name: 'Sofa-1', price: '390', link: '17', id: nanoid()},
        {src:'/images/shop/18.jpeg',name: 'Shelf', price: '280', link: '18', id: nanoid()},
        {src:'/images/shop/19.jpeg',name: 'Shelf', price: '390', link: '19', id: nanoid()},
        {src:'/images/shop/20.jpeg',name: 'Shelf-White', price: '420', link: '20', id: nanoid()},
    ])

    const [cart,setCart] = useState([]);


  return (
    <BrowserRouter>
        <div className='main-header'>
            <NavLink className="logo" to='/'>I-Furniture</NavLink>
            <div className='main-header-nav'>
                <div>
                    <NavLink className='navLink' to='/'>Home</NavLink>
                </div>
                <div>
                    <NavLink className='navLink' to='about'>About</NavLink>
                </div>
                <div>
                    <NavLink className='navLink' to='shop'>Shop</NavLink>
                </div>
                <div>
                    <NavLink className='navLink' to='cart'>Cart ({cart.length})</NavLink>
                </div>
            </div>
        </div>

        <Routes>
            <Route path='/' element={<Home/>} ></Route>
            <Route path='about' element={<About/>} ></Route>
            <Route path='shop' element={<Shop items={items}/>}></Route>
            <Route path='cart' element={<Cart cart={cart} setCart={setCart}/>} ></Route>
            <Route path='items'>
                {items.map(e=>{
                    return (
                        <Route key={e.id} path={e.link} element={<ShopSubItem props={e} cart={cart} setCart={setCart}/>}></Route>
                    )
                })}
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
