import React from 'react'
import "./index.scss";
const News = () => {
    return (
        <>
            <section id='news'>
                <div className='news_container'>
                    <div className='news_content'>
                        <div className='news_img'>
                            <img src="https://preview.colorlib.com/theme/estore/assets/img/collection/latest-man.png" alt="" />
                            <div className='news_text'>
                                <h2>
                                    Get Our Latest Offers News
                                </h2>
                                <p>
                                    Subscribe news latter
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default News