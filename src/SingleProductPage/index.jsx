import React from 'react'
import SingleProduct from '../ressources/components/SingleProduct'
import Commentaires from '../ressources/components/Commentaires'
import Header from '../ressources/components/Header'
import Footer from '../ressources/components/Footer'

const SingleProductPage = () => {
  return (
    <>
        <Header/>
        <SingleProduct/>
        <Commentaires/>
        <Footer/>
    </>
  )
}

export default SingleProductPage