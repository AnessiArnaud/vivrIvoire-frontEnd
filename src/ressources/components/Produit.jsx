import React from 'react'
//
import locationSvg from '../icones/location.svg'
import { useNavigate } from 'react-router-dom'
import listeProduits from '../../ProduitPage/produits.json'
import { useState,useEffect } from 'react'

//////////////////////

import ailImg from '../images/ail.jpg'
import arachideImg from '../images/arachide.jpg'
import aubergineImg from '../images/aubergine.jpg'
import bananeImg from '../images/banane.jpg'
import caroteImg from '../images/carote.jpg'
import cocoImg from '../images/coco.jpg'
import gomboImg from '../images/gombo.jpg'
import ignameImg from '../images/igname.jpg'
import maisImg from '../images/mais.jpg'
import maniocImg from '../images/manioc.jpg'
import oignonImg from '../images/oignon.jpg'
import patateImg from '../images/patate.jpg'
import pimentImg from '../images/piment.jpg'
import taroImg from '../images/taro.jpg'
import tomateImg from '../images/tomate.jpg'
import notFound from '../images/notFound.jpg'

const Produit = (props) => {

  const navigate=useNavigate()
  const goTo=()=>{
      navigate(`/produit/singleproduct?type=${props.type}&qty=${props.quantity}`)
  }

  const [nomProduit, setNomProduit] = useState(props.type);
  const [prixProduit, setPrixProduit] = useState(null);
  const [imageProduit,setImageProduit]=useState(maniocImg);
  const [city, setCity] = useState(props.city);
  
  useEffect(()=>{
        const produitTrouve = listeProduits.produitsVivriers.find(
          (produit) => produit.nom.toLowerCase() === nomProduit.toLowerCase()
        );
    
        if (produitTrouve) {
          setPrixProduit(produitTrouve.prixDeBase);
          //setCity(produitTrouve.city);
          switch (produitTrouve.nom) {
            case "Ail":
                setImageProduit(ailImg)
            break;
            case "Arachide":
                setImageProduit(arachideImg)
            break;
            case "Aubergine":
                setImageProduit(aubergineImg)
            break;
            case "Banane plantain":
                setImageProduit(bananeImg)
            break;
            case "Carote":
                setImageProduit(caroteImg)
            break;
            case "Noix de coco":
                setImageProduit(cocoImg)
            break;
            case "Gombo":
                setImageProduit(gomboImg)
            break;
            case "Igname":
                setImageProduit(ignameImg)
            break;
            case "Mais":
                setImageProduit(maisImg)
            break;
            case "Manioc":
                setImageProduit(maniocImg)
            break;
            case "Oignon":
                setImageProduit(oignonImg)
            break;
            case "Patate douce":
                setImageProduit(patateImg)
            break;
            case "Piment":
                setImageProduit(pimentImg)
            break;
            case "Taro":
                setImageProduit(taroImg)
            break;
            case "Tomate":
                setImageProduit(tomateImg)
            break;
        
            default:
                setImageProduit(notFound)
                break;
        }
        } else {
          setPrixProduit(null);
        }
        
  },[])

  return (
    <div className='produitContainer' onClick={goTo}>
        <div className='produitContainerChilds'>
            <span className='produitType'>{props.type}</span>
            <img src={imageProduit} alt="" />
        </div>
        <div className='produitContainerChilds'>
            <p>{prixProduit}  Fcfa /Kg</p>
            <p>{props.quantity} Kg disponible</p>
        </div>
        <div className='produitContainerChilds'>
            <img src={locationSvg} alt="" />
            <p>{city}</p>
        </div>
    </div>
  )
}

export default Produit