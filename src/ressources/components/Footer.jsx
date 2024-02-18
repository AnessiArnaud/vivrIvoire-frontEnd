import React from 'react'
import instagramSvg from '../icones/instagram.svg'
import twitterSvg from '../icones/twitter.svg'
import facebookSvg from '../icones/facebook.svg'

const Footer = () => {
  return (
    
    <footer>
            <div className="footerContact">
                <p className='footerTitles'>CONTACTEZ-NOUS !</p>
                <form action="">
                    <input type="email"  placeholder="monmail@gmail.com" id='footerMail'/>
                    <textarea name="message" id="footerTextArea"  rows="3" placeholder="Dites quelque chose" ></textarea>
                    <input type="submit" value="Envoyez" id='footerSendBtn'/>
                </form>
                <p className='footerSocialMedia'>
                    Medias sociaux 
                    <img src={instagramSvg} alt=""/><img src={twitterSvg} alt=""/><img src={facebookSvg} alt=""/>
                </p>
            </div>
            <div className="footerLink"><p className='footerTitles'>Liens utiles</p>
                <ul>
                    <li>Accueil</li>
                    <li>Produit</li>
                    <li>Documentation</li>
                    <li>Centre d'aide</li>
                </ul>
            </div>
            <div className="footerAboutUs">
                <p className='footerTitles'>A propos de nous !</p>
                <p>
                    Vivre'Ivoire, nous somme là pour vous accompagner
                </p>
            </div>
    </footer>
  )
}

export default Footer