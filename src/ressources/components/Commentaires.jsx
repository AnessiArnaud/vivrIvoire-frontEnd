import React from 'react'
import rateStars from '../icones/rateStars.svg'
const Commentaires = () => {
  return (
    <div className='commentairesContainer'>
        <h2>Commentaires clients</h2>
        <div className='commentaires'>
            <div><p>4,6/5</p> <img src={rateStars} alt="" /></div>
            <div>
                <h3>Commentaires</h3>
                <div>
                    <p>Super produit</p>
                    <p>25-12-2023 par Kouadio</p>
                </div>
                <div>
                    <p>Super produit</p>
                    <p>25-12-2023 par Kouadio</p>
                </div>
                <div>
                    <p>Super produit</p>
                    <p>25-12-2023 par Kouadio</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Commentaires