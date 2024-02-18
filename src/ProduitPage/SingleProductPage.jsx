import React from 'react'
import SingleProduct from '../ressources/components/SingleProduct'
import Header from '../ressources/components/Header'
import Footer from '../ressources/components/Footer'
import Commentaires from '../ressources/components/Commentaires'

const SingleProductPage = () => {
  return (
    <>
        <Header/>
        <div className='singleProductPageContainer'>
            <SingleProduct/>
        </div>
        <Commentaires/>
        <Footer/>
    </>
   
  )
}

export default SingleProductPage