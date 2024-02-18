import React from 'react'
import maniocImg from '../images/manioc.jpg'

import aubergineImg from '../images/aubergine.jpg'
import bananeImg from '../images/banane.jpg'
import caroteImg from '../images/carote.jpg'
import cocoImg from '../images/coco.jpg'
import gomboImg from '../images/gombo.jpg'
import ignameImg from '../images/igname.jpg'
import maisImg from '../images/mais.jpg'
import oignonImg from '../images/oignon.jpg'
import patateImg from '../images/patate.jpg'
import pimentImg from '../images/piment.jpg'
import taroImg from '../images/taro.jpg'
import tomateImg from '../images/tomate.jpg'

const PlusDemandes = () => {
  return (
    <>
        <h1> Les plus démandés</h1>
        <div className='plusDemandesContainer'>
        <div><img src={maniocImg} alt="" /></div>
        <div><img src={aubergineImg} alt="" /></div>
        <div><img src={ignameImg} alt="" /></div>
        <div><img src={bananeImg} alt="" /></div>
        <div><img src={pimentImg} alt="" /></div>
        <div><img src={tomateImg} alt="" /></div>
        <div><img src={gomboImg} alt="" /></div>
        <div><img src={oignonImg} alt="" /></div>
        <div><img src={maisImg} alt="" /></div>
        <div><img src={caroteImg} alt="" /></div>
        <div><img src={taroImg} alt="" /></div>
    </div>
    </>
    
  )
}

export default PlusDemandes