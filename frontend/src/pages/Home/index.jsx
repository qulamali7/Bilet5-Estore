import React from 'react'
import { Helmet } from 'react-helmet-async'
import Products from '../../components/Products'
import Hero from '../../components/Hero'
import Category from '../../components/Category'
import News from '../../components/News'
import Methods from '../../components/Methods'

const Home = () => {
  return (
    <>
    <Helmet>
        <title>Home</title>
    </Helmet>
    <Hero/>
    <Category/>
    <Products/>
    <News/>
    <Methods/>
    </>
  )
}

export default Home