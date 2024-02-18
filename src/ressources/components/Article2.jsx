import React from 'react'
import maisImg from '../images/mais.jpg'
import videoSvg from '../icones/video.svg'
import accessSvg from '../icones/access.svg'
import { useNavigate } from 'react-router-dom'
import SingleArticlePage from '../../Documentation/SingleArticlePage'
const Article2 = () => {
    const navigate=useNavigate()
const goTo=()=>{
    navigate('/documentation/article')
}
  return (
    <div className='articleContainer' onClick={goTo}>
        <div className='articleContainerChilds'>
            <span className='produitType'>Maïs</span>
            <img src={maisImg} alt="" />
        </div>
        <div className='articleContainerChilds'>
            <p>Tous sur le maïs </p>
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

export default Article2