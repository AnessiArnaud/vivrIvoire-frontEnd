import React from 'react'
import ResumePanier from '../ressources/components/ResumePanier'
import Header from '../ressources/components/Header'
import Footer from '../ressources/components/Footer'
import maniocImg from '../ressources/images/manioc.jpg'
import tomateImg from '../ressources/images/tomate.jpg'
import deleteSvg from '../ressources/icones/delete.svg'
import addBtn from '../ressources/icones/add.svg'
const Panier = () => {
  return (
    <>  
        <Header/>
        <main>
            <div className='panierGroup'>
                        <table className='panierContainer'>
                        <thead>
                            <th>Votre Panier</th>
                        </thead>
                        <tbody>
                            <tr className='panierSingleProduct'>
                                <td className='panierImg'><img src={maniocImg} alt="img" /></td>
                                <td>
                                    <p>Manioc</p>
                                    <p>1Kg</p>
                                </td>
                                <td className='panierBtn'>
                                    <button className='panierBtnPrice'>1000 Fcfa</button>
                                    <button className='panierBtnCommander'>Commander</button>
                                </td>
                                <td><img src={deleteSvg} alt="Delete" />
                                    <p>Supprimer</p>
                                </td>
                            </tr>

                            <tr className='panierSingleProduct'>
                                <td className='panierImg'><img src={tomateImg} alt="img" /></td>
                                <td>
                                    <p>Tomate</p>
                                    <p>6Kg</p>
                                </td>
                                <td className='panierBtn'>
                                    <button className='panierBtnPrice'>5000 Fcfa</button>
                                    <button className='panierBtnCommander'>Commander</button>
                                </td>
                                <td><img src={deleteSvg} alt="Delete" />
                                    <p>Supprimer</p>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                    <ResumePanier/>
            </div>
        
        </main>

        
        <Footer/>
    </>
  )
}

export default Panier