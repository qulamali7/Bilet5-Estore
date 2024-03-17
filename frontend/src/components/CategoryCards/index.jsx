import React from 'react'
import "./index.scss";
const CategoryCards = () => {
    return (
        <>
            <div className='category_cards'>
                <div className='category_card1'>
                    <div className='category_text'>
                        <p>Owmen`S</p>
                        <button className="button-34" role="button">Best New Deals</button>
                    </div>
                </div>
                <div className='category_card2'>
                    <div className='category_text'>
                        <p>Winter Cloth</p>
                        <button className="button-34" role="button">Best New Deals</button>
                    </div>
                </div>
                <div className='category_card3'>
                    <div className='category_text'>
                        <p>Man`S Cloth</p>
                        <button className="button-34" role="button">Best New Deals</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoryCards