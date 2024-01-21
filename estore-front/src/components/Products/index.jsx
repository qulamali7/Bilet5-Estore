import React from 'react'
import "./index.scss";
import ProductsCards from '../ProductsCards';
const Products = () => {
    return (
        <>
            <section id='products'>
                <div className='products_container'>
                    <div className='products_content'>
                        <div className='products_title'>
                            <h2>Latest Products</h2>
                            <ul>
                                <li>All</li>
                                <li>New</li>
                                <li>Featured</li>
                                <li>Offer</li>
                            </ul>
                        </div>
                        <ProductsCards />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products