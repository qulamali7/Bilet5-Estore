import React, { useEffect, useState } from 'react'
import "./index.scss";
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const Detail = () => {
    const [detail, setDetail] = useState([])
    const { id } = useParams()
    async function GetfetchById(id) {
        try {
            await fetch("http://localhost:3100/products/" + id)
                .then(res => res.json())
                .then(data => setDetail(data))
        } catch (error) {
            console.log(error.messsage)
        }
    }
    useEffect(() => {
        GetfetchById(id)
    }, [])
    return (
        <>
            <Helmet>
                <title>Detail</title>
            </Helmet>
            <section id='detail'>
                <div className='detail_container'>
                    <div className='detail_content'>
                        <h2>Detail</h2>
                        <div className='detail_card'>
                            <img src={detail.img} alt="" />
                            <div className='card_content'>
                                <div className='card_icons'>
                                    <i className="fa-solid fa-heart"></i>
                                    <i className="fa-solid fa-cart-shopping"></i>
                                </div>
                                <h3>{detail.name}</h3>
                                <p>{detail.price}$</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Detail