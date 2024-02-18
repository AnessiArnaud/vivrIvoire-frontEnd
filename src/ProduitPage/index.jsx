import React from 'react'
import Header from '../ressources/components/Header'
import Footer from '../ressources/components/Footer'
import PlusDemandes from '../ressources/components/PlusDemandes'
import Produit from '../ressources/components/Produit'
import Filter from '../ressources/components/Filter'
import panierImg from '../ressources/icones/panier.svg'
import addProductImg from '../ressources/icones/addProduct.svg'
import { useNavigate } from 'react-router-dom'

import { useState,useEffect } from 'react'

const ProduitPage = (props) => {
  const navigate=useNavigate();

  const goTo=(arg)=>{
    if(arg==="panier"){
      navigate('/panier')
    }
    else if(arg==="ajouter"){
      navigate('/ajouter')
    }
    
  }

  /*const [data, setData] = useState([props.data]);

  useEffect(() => {
    / Effectuez une requête au serveur pour récupérer les données
    fetch('https://vivrivoire-api.onrender.com/get-cultures')  // Endpoint à créer sur le serveur pour récupérer les données
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Erreur lors de la récupération des données:', error));
    setData(props.data)
  }, []);*/

  return (
    <>
        <Header/>
        <Filter/>
        <div className='produitPageContainer'>
            <div className='ongletsProduits'>
              <button className='ongletsProduitsChilds' onClick={()=>goTo("panier")}>
                <img src={panierImg} alt="" />
              </button>
              <button className='ongletsProduitsChilds' onClick={()=>goTo("ajouter")}>
                <img src={addProductImg} alt="" />
              </button>
              {
                /*
                <div  className='ongletsProduitsChilds'>
                <img src={panierImg} alt="" />
              </div>
              <div  className='ongletsProduitsChilds'>
                <img src={panierImg} alt="" />
              </div> */
              }
          </div>
            <PlusDemandes/>
            <h1>Explorez</h1>
            <div className='produitExplore'>
                {props.data.map((item) => (
                    
                      <Produit key={item._id} type={item.type} quantity={item.quantity} city={item.city}/>
                  
                  ))}
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default ProduitPage