import React from 'react'
import Header from '../ressources/components/Header'
import Footer from '../ressources/components/Footer'
import PlusDemandes from '../ressources/components/PlusDemandes'
import Filter from '../ressources/components/Filter'
import Article1 from '../ressources/components/Article1'
import Article2 from '../ressources/components/Article2'
import Article3 from '../ressources/components/Article3'
import Article4 from '../ressources/components/Article4'

const Documentation = () => {
  return (
    <div>
        <>
        <Header/>
        <Filter/>
        <div className='articlePageContainer'>
            <h1>Explorez</h1>
            <div className='articleExplore'>
                <Article1/>
                <Article2/>
                <Article3/>
                <Article4/>
            </div>
        </div>
        <Footer/>
    </>
    </div>
  )
}

export default Documentation