import React from 'react'
import maniocSvg from '../images/mais.jpg'
import videoSvg from '../icones/video.svg'
import YouTube from 'react-youtube';

const ExempleArticle = () => {
  const videoId = '4ynctEW5cQE';
  return (
    <div className='exempleArticle'>
        <div className='exempleArticleChilds'><span className='produitType'>Manioc</span><img src={maniocSvg} alt="" /></div>
        <div className='exempleArticleChilds'><p>Comment bien cultiver le manioc ?</p></div>
        <div className='exempleArticleChilds'>
          <YouTube videoId={videoId} />
        </div>
        <div className='exempleArticleChilds'>
                <p>Utilisations du manioc
                Les tubercules et les feuilles du manioc doux comme du 
                manioc amer sont consommés dans de nombreuses recettes sud-américaines 
                et africaines, où ce féculent est on ne peut  plus célèbre et fait partie de l'alimentation 
                de base. Avant toute consommation, il est recommandé de laver, râper, sécher et cuire le manioc. 
                Tout comme le tubercule, les feuilles doivent également être bouillies au préalable pour éliminer 
                leur toxicité.
                </p>
                <p>
                Le manioc peut se cuisiner de la même façon que la pomme de terre. Il peut donc être bouilli ou bien frit, et servir d'accompagnement pour un poisson ou bien une viande. Le manioc permet également servir à réaliser de la semoule, de la farine (une farine qui remplace parfaitement la farine de blé dans le cadre d'une alimentation sans gluten), et des boissons alcoolisées par fermentation de la plante. 
                </p>
        </div>
    </div>
  )
}

export default ExempleArticle