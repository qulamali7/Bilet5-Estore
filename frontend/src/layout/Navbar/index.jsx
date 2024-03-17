import React from 'react'
import "./index.scss";
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <header>
                <div className='header_top'>
                    <div className='select'>
                        <img src="https://preview.colorlib.com/theme/estore/assets/img/icon/header_icon.png" alt="" />
                        <span>USA</span>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to={"/"}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/add"}>Add</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/basket"}>Basket</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/wishlist"}>Wishlist</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='header_container'>
                    <div className='header_area'>
                        <div className='main_header'>
                            <div className='logo'>
                                <Link to={"/"}>   <img src="https://preview.colorlib.com/theme/estore/assets/img/logo/logo.png" alt="" /></Link>
                            </div>
                            <nav>
                                <ul>
                                    <li>
                                        <NavLink to={"/"}>Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"/add"}>Add</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"/basket"}>Basket</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"/wishlist"}>Wishlist</NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar