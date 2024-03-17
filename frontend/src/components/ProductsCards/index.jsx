import React, { useContext, useEffect, useState } from 'react'
import "./index.scss";
import { Link } from 'react-router-dom';
import { BasketContext } from '../../context/BasketContex';
import { WishlistContext } from '../../context/WishlistContext';
const ProductsCards = () => {
    const { addBasket } = useContext(BasketContext)
    const { handleWishlist, wishlist } = useContext(WishlistContext)
    const [data, setData] = useState([])
    async function Getfetch() {
        try {
            await fetch("http://localhost:3100/products")
                .then(res => res.json())
                .then(data => setData(data))
        } catch (error) {
            console.log(error.messsage)
        }
    }
    useEffect(() => {
        Getfetch()
    }, [])

    return (
        <>
            <div className='products_cards'>
                {data && data.map((x) => (
                    <div key={x._id} className='products_card'>
                        <div className='card_img'>
                            <img src={x.img} alt="" />
                        </div>
                        <div className='card_content'>
                            <div className='card_icons'>
                                {wishlist.some((item) => x._id === item._id)
                                    ?
                                    <i className="fa-solid fa-heart red" onClick={() => handleWishlist(x)}></i>
                                    : <i className="fa-solid fa-heart" onClick={() => handleWishlist(x)}></i>
                                }
                                <i className="fa-solid fa-cart-shopping" onClick={() => addBasket(x)}></i>
                                <Link to={"/detail/" + x._id}><i className="fa-solid fa-eye"></i></Link>
                            </div>
                            <h3>{x.name}</h3>
                            <p>{x.price}$</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ProductsCards