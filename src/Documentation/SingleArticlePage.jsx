import React from 'react'
import ExempleArticle from '../ressources/components/ExempleArticle'
import Article1 from '../ressources/components/Article1'
import Header from '../ressources/components/Header'
import Footer from '../ressources/components/Footer'

const SingleArticlePage = () => {
  return (
    <>
      <Header/>
          <div className='singleArticlePageContainer'>
            <ExempleArticle/> 
            {/**
             *             <div className='suggestionRight'>
                <h2>Sur la même culture...</h2>
                <div >
                    <Article/>
                    <Article/>
                    <Article/>
                </div>
            </div>
             */}
        </div>
      <Footer/>
    </>
    
  )
}

export default SingleArticlePage