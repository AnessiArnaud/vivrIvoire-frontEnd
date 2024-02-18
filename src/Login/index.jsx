import React, { useState } from 'react'
import googleIcone from '../ressources/icones/google.svg'
import img3 from '../ressources/images/img3.jpg'
import SignUp from '../SignUp'
const Login = () => {

const handleHaveAcount=()=>{
    setHaveacount(!haveACount)
}
const [haveACount,setHaveacount]=useState(true);
const [mail,setMail]=useState();
const [pwd,setPwd]=useState();
const [userConnected,setUserConnected]=useState(false);


function handleSubmit(e) {
    e.preventDefault();

    console.log(mail, pwd);
    fetch("https://vivrivoire-api.onrender.com/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        mail,
        pwd,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);

          window.location.href = "./";
          setUserConnected(true);
        }else{
          alert("Connection échouée")
        }
      });
  }


  return haveACount? (
    <div className="loginContainer">
        <div className="loginLeft">
            <div className="loginLeftBtn">
                <button>Se connecter</button>
                <button onClick={()=>{setHaveacount(false)}}> S'inscrire</button>
            </div>
            <div className="loginLeftImage">
                <img src={img3} alt=''/>
            </div>
        </div>
        <div className="loginRight">
            <h3 className='signTitle'>Se connecter</h3>
            <form action="" onSubmit={handleSubmit}>
                    <button type="button" className="Btn">
                        <img src={googleIcone} alt=""/> <span>connecter avec Google</span>
                    </button>
                    <hr/>
                    <label htmlFor="mail" className='spacingLabel'>
                        Adresse Email
                    </label>
                    <input type="email" name="mail" id="mail" value={mail} onChange={(e)=>setMail(e.target.value)}/>
                    <label htmlFor="pwd" className='spacingLabel'>
                        Mot de passe
                    </label>
                    <input type="password" name="pwd" id="pwd" value={pwd} onChange={(e)=>setPwd(e.target.value)}/>
                    <input type="submit" value="Se connecter" className="Btn" id="loginBtn"/>
                    <span className='blueSpan'>
                        Mot de passe oublié ?
                    </span>
            </form>
            
        </div>
     </div>
     
  ):(
    <SignUp handleHaveAcount={handleHaveAcount}/>
  )
}

export default Login