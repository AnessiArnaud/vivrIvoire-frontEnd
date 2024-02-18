import React from 'react'
import maniocImg from '../images/manioc.jpg'
import videoSvg from '../icones/video.svg'
import accessSvg from '../icones/access.svg'
import { useNavigate } from 'react-router-dom'
import SingleArticlePage from '../../Documentation/SingleArticlePage'
const Article1 = () => {
    const navigate=useNavigate()
const goTo=()=>{
    navigate('/documentation/article')
}
  return (
    <div className='articleContainer' onClick={goTo}>
        <div className='articleContainerChilds'>
            <span className='produitType'>Manioc</span>
            <img src={maniocImg} alt="" />
        </div>
        <div className='articleContainerChilds'>
            <p>Comment bien cultiver le manioc ?</p>
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

export default Article1