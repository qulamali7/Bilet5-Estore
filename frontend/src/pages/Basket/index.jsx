import React, { useContext } from 'react'
import "./index.scss";
import { BasketContext } from '../../context/BasketContex';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const Basket = () => {
    const { basket, removeBasket, increaseCount, decreaseCount } = useContext(BasketContext)
    return (
        <>
            <Helmet>
                <title>Basket</title>
            </Helmet>
            <section id='basket'>
                <div className='basket_container'>
                    <div className='basket_content'>
                        <h2>Basket</h2>
                        <div className='basket_cards'>
                            {basket && basket.map((x) => (
                                <div key={x._id} className='basket_card'>
                                    <div className='card_img'>
                                        <img src={x.img} alt="" />
                                    </div>
                                    <div className='card_content'>
                                        <div className='card_icons'>
                                            <i className="fa-solid fa-trash" onClick={() => removeBasket(x)}></i>
                                            <Link to={"/detail/" + x._id}><i className="fa-solid fa-eye"></i></Link>
                                        </div>
                                        <h3>{x.name}</h3>
                                        <p>{x.price * x.count}$</p>
                                        <button className="button-55" role="button" onClick={() => increaseCount(x)}>+</button>
                                        <span>{x.count}</span>
                                        <button className="button-55" role="button" onClick={() => decreaseCount(x)}>-</button>
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

export default Basket