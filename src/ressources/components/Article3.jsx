import React from 'react'
import videoSvg from '../icones/video.svg'
import accessSvg from '../icones/access.svg'
import { useNavigate } from 'react-router-dom'

import bananeImg from "../images/banane.jpg"

import SingleArticlePage from '../../Documentation/SingleArticlePage'
const Article3 = () => {
    const navigate=useNavigate()
const goTo=()=>{
    navigate('/documentation/article')
}
  return (
    <div className='articleContainer' onClick={goTo}>
        <div className='articleContainerChilds'>
            <span className='produitType'>Banane plantain</span>
            <img src={bananeImg} alt="" />
        </div>
        <div className='articleContainerChilds'>
            <p>Tout sur le bananier plantain: variétés, itinéraire technique et budget</p>
        </div>
        <div className='articleContainerChilds'>
            <div className='articleInfoContainer'>
                <div>
                    <span className='readTime'>2 min lecture </span>
                </div>
                <div>
                    <img src={videoSvg} alt="" />
                    <span className='videoAvailable'>Vidéo disponible</span>
                </div>
            </div>
            <img src={accessSvg} alt="" />
        </div>
    </div>
  )
}

export default Article3