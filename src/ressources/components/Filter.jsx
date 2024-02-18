import React from 'react'
import filterSvg from '../icones/filtre.svg'
const Filter = () => {
  return (
    <div className='filterContainer'>
        <div className='filterContainerChilds'><img src={filterSvg} alt="" /> Filtrer</div>
        <div className='filterContainerChilds'>
            <p>Ail</p>
            <p>Arachide</p>
            <p>Aubergine</p>
            <p>Banane plantain</p>
            <p>Carote</p>
            <p>Gombo</p>
            <p>Igname</p>
            <p>Maïs</p>
            <p>Manioc</p>
            <p>Oignon</p>
            <p>Patate douce</p>
            <p>Taro</p>
            <p>Tomate</p>
        </div>
    </div>
  )
}

export default Filter