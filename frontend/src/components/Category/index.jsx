import React from 'react'
import "./index.scss";
import CategoryCards from '../CategoryCards';
const Category = () => {
  return (
    <>
    <section id='category'>
        <div className='category_container'>
            <div className='category_content'>
                <h2>Shop by Category</h2>
                <CategoryCards/>
            </div>
        </div>
    </section>
    </>
  )
}

export default Category