import React from 'react'

const ResumePanier = () => {
  return (
    <table className='resumePanierContainer'>
            <thead>
                <th>Resume de votre Panier</th>
            </thead>
            <tbody>
                <tr className='panierSingleProduct'>
                    <td>
                        <p className='productType'>Manioc</p>
                        <p className='productType'>Tomate</p>
                    </td>
                    <td className='panierBtn'>
                        <button className='panierBtnPrice'>6000 Fcfa</button>
                    </td>
                </tr>
                <tr>
                    <button className='panierBtnCommander'>Finaliser la commande</button>
                </tr>
            </tbody>
        </table>
  )
}

export default ResumePanier