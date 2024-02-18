import React, { useEffect,useState } from 'react'
import addBtn from '../icones/add.svg'
import infoSvg from '../icones/info.svg'
import rateStars from '../icones/rateStars.svg'

/////////////////
import listeProduits from '../../ProduitPage/produits.json'
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
/////////////////

const SingleProduct = () => {

  const [queryParams, setQueryParams] = useState({});

  //////////////////////
  const [infoProduit, setInfoProduit] = useState();
  const [prixProduit, setPrixProduit] = useState(null);
  const [imageProduit,setImageProduit]=useState(maniocImg);
  ////////////////

  useEffect(() => {
    // Function to parse query parameters from the current URL
    const parseQueryParams = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const params = {};
      
      for (const [key, value] of searchParams.entries()) {
        params[key] = value;
      }

      setQueryParams(params);


      /******************************* */

      const produitTrouve = listeProduits.produitsVivriers.find(
        (produit) => produit.nom.toLowerCase() === params.type.toLowerCase()
      );
  
      if (produitTrouve) {
        setPrixProduit(produitTrouve.prixDeBase);
        setInfoProduit(produitTrouve.info)
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
      
      /************************************** */
      
    };



    // Call the function when the component mounts
    parseQueryParams();
  

  }, []); // The empty dependency array ensures that this effect runs only once after the initial render

    
    
  return (
    <div className='singleProductContainer'>
        <div className='singleProductContainerImg'>
        <img src={imageProduit} alt="" />
            {
                /*
                 <div className='singleProductImg'><img src={imageProduit} alt="" /></div>

                <div className='singleProductLittleImg'>
                <img src={imageProduit} alt="" />
                <img src={imageProduit} alt="" />
                </div>*/ 
            }
        </div>
        <div>
            <div>
                <p>{prixProduit} Fcfa/Kg</p>
                <p>{queryParams.qty} Kg disponibles</p>
            </div>
            <div>
                <div><img src={rateStars} alt="" /></div>
            </div>
            <div className='panierAdd'>
                <div className='panierQuantity'>1Kg</div>
                <div><img src={addBtn} alt="" /></div>
                
            </div>
            <button className='panierBtnCommander'>Commander</button>
        </div>
        <div>
            <div><img src={infoSvg} alt="" /></div>
            <div>
                <p>
                {infoProduit}
                </p>
                <span>Voir plus</span>
            </div>
        </div>
    </div>
  )
}

export default SingleProduct