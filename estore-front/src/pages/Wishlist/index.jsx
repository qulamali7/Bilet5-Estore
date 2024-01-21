import React, { useContext } from 'react'
import "./index.scss";
import { WishlistContext } from '../../context/WishlistContext';
import { Link } from 'react-router-dom';
import { BasketContext } from '../../context/BasketContex';
import { Helmet } from 'react-helmet-async';
const Wishlist = () => {
    const { addBasket } = useContext(BasketContext)
    const { wishlist, handleWishlist } = useContext(WishlistContext)
    return (
        <>
            <Helmet>
                <title>Wishlist</title>
            </Helmet>
            <section id='wishlist'>
                <div className='wishlist_container'>
                    <div className='wishlist_content'>
                        <h2>Wishlist</h2>
                        <div className='wishlist_cards'>
                            {wishlist && wishlist.map((x) => (
                                <div key={x._id} className='wishlist_card'>
                                    <div className='card_img'>
                                        <img src={x.img} alt="" />
                                    </div>
                                    <div className='card_content'>
                                        <div className='card_icons'>
                                            <i className="fa-solid fa-trash" onClick={() => handleWishlist(x)}></i>
                                            <i className="fa-solid fa-cart-shopping" onClick={() => addBasket(x)}></i>
                                            <Link to={"/detail/" + x._id}><i className="fa-solid fa-eye"></i></Link>
                                        </div>
                                        <p>{x.price}$</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Wishlist