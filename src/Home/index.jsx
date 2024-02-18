import React from 'react'
import img1 from '../ressources/images/img1.jpg'
import img2 from '../ressources/images/img2.jpg'
import img3 from '../ressources/images/img3.jpg'
import img4 from '../ressources/images/img4.jpg'
import Header from '../ressources/components/Header'
import Footer from '../ressources/components/Footer'
const Home = () => {
  return (
    <>
    <Header/>
    <main>
       <div className="homeWelcomeContainer">
            <div className="homeWelcomeContainerLeft">
                <h1><span>Ensemble</span>, engageons nous <br/>
                    à promouvoir le secteur vivrier <br/>
                    en <span>Côte D'ivoire </span>
                </h1>
                <p>
                    Nous sommes fiers de soutenir les agriculteurs locaux, à promouvoir des pratiques agricoles durables et à renforcer l'économie locale. 
                </p>
                <button>
                    Découvrir plus
                </button>
            </div>
            <div className="homeWelcomeContainerImg">
                <img src={img3} alt=""/>
            </div>
       </div>
       <div className="homeContainer2">
            <h2>Nous sommes là pour vous accompagner</h2>
            <div className="homeContainer2Sections">
                <div className="homeContainer2Section">
                    <div className="homeContainer2SectionImg"><img src={img2} alt=""/></div>
                    <h3>Documentation</h3>
                    <p>Documentez vous sur les bonnes pratiques concernant les cultures à travers de nombreux articles</p>
                </div>
                <div className="homeContainer2Section">
                    <div className="homeContainer2SectionImg"><img src={img4} alt=""/></div>
                    <h3>Produits</h3>
                    <p>Entrez en contact avec des producteur et bénéficiez de leurs produits de meilleur qualité</p>
                </div>
                <div className="homeContainer2Section">
                    <div className="homeContainer2SectionImg"><img src={img1} alt=""/></div>
                    <h3>Centre d'aide</h3>
                    <p>Notre équipe est là pour vous, nous vous accompagnons tout le long du processus, de la production à commercialisation</p>
                </div>
                
            </div>

       </div>
    </main>
    <Footer/>
    </>
  )
}

export default Home