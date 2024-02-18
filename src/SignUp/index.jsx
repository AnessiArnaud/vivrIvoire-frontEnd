import img2 from '../ressources/images/img2.jpg'
import React, { useState } from 'react'

const SignUp=(props)=> {



 //const [nextBtn,setNextBtn]=useState(false)
 const [name, setName] = useState('');
 const [type, setType] = useState('');
 const [mail, setMail] = useState('');
 const [pwd, setPwd] = useState('');
 const [city, setCity] = useState('');
 const [culture, setCulture] = useState('');
 const [tel, setTel] = useState('');
 const [tel2, setTel2] = useState('');

 
   /* const nextClick=()=>{
            setNextBtn(true);
    }*/

    const handleSubmit = (e) => {
          e.preventDefault();
    
          fetch("https://vivrivoire-api.onrender.com/register", {
            method: "POST",
            crossDomain: true,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
              name,
              type,
              mail,
              pwd,
              city,
              culture,
              tel,
              tel2 
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data, "userRegister");
              if (data.status === "ok") {
                alert("Registration Successful");
              } else {
                alert("Something went wrong");
              }
            });
        
      };
    

      return (
            <div className="signUpRight">
            <h3 className='signTitle'>S'inscrire</h3>
                <form className='signUpRightContainer' onSubmit={handleSubmit}>
                        
                    <div className='signUpDiv'>
                        <label htmlFor="name" className='spacingLabel'>
                            Nom et prenom(s)
                        </label>
                        <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
                        <span id='Iam'>Je suis</span>
                        <div className='signUpRightRadio'>
                                <input type="radio" id='producteur' name='producteur' value={'producteur'}/>
                                <label htmlFor="producteur">Producteur</label>
                                <input type="radio" id='particulier' value={'particulier'}/>
                                <label htmlFor="particulier">Particulier</label>
                        </div>
                        <label htmlFor="mail" className='spacingLabel'>
                                Adresse Email
                        </label>
                        <input type="email" name="mail" id="mail" value={mail} onChange={(e) => setMail(e.target.value)}/>
                        <label htmlFor="pwd" className='spacingLabel'>
                                Mot de passe
                        </label>
                        <input type="password" name="pwd" id="pwd" value={pwd} onChange={(e) => setPwd(e.target.value)}/>
                    </div>

                    <div className='signUpDiv'>

                            <label htmlFor="city" className='spacingLabel'>
                            Ville/Région
                        </label>
                        <input type="text" name="city" id="city" value={city} onChange={(e) => setCity(e.target.value)}/>
                        <label htmlFor="culture" className='spacingLabel'>
                                Culture produite
                        </label>
                        <select name="culture" id="culture" value={culture} onChange={(e) => setCulture(e.target.value)}>
                            <optgroup>
                                
                                <option value={"Ail"}>Ail</option>
                                <option value={"Arachide"}>Arachide</option>
                                <option value={"Aubergine"}>Aubergine</option>
                                <option value={"Banane"}>Banane plantain</option>
                                <option value={"Carote"}>Carote</option>
                                <option value={"Gombo"}>Gombo</option>
                                <option value={"Igname"}>Igname</option>
                                <option value={"Maïs"}>Maïs</option>
                                <option value={"Manioc"}>Manioc</option>
                                <option value={"Oignon"}>Oignon</option>
                                <option value={"Patate"}>Patate douce</option>
                                <option value={"Taro"}>Taro</option>
                                <option value={"Tomate"}>Tomate</option>
                            </optgroup>
                        </select>
                        <label htmlFor="tel" className='spacingLabel' >
                                Numero de téléphone
                        </label>
                        <input type='tel' name="tel" id="tel" value={tel} onChange={(e) => setTel(e.target.value)}/>

                        <label htmlFor="tel2" className='spacingLabel'>
                                Numero de téléphone
                        </label>
                        <input type='tel' name="tel2" id="tel2" value={tel2} onChange={(e) => setTel2(e.target.value)}/>
                    </div>

                    <div className='signUpDiv'>
                        <input type="submit" className="Btn" id='nextButton' value={"S'inscrire"}/>

                        <span className='blueSpan' onClick={props.handleHaveAcount}>
                            Déjà inscrit ? Se connecter
                        </span>
  
                    </div>

                </form>
            </div>

    )
      
    }
    

export default SignUp