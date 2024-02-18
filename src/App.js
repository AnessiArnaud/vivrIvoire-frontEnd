import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './Home'
import ProduitPage from './ProduitPage';
import Panier from './Panier'
import Login from './Login'
import Documentation from './Documentation';
import './App.css';
import SingleArticlePage from './Documentation/SingleArticlePage';
import SingleProductPage from './ProduitPage/SingleProductPage';
import Articles from './Article';
import AjouterProduit from './ressources/components/AjouterProduit';
import DisplayData from './ressources/components/DisplayData';
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    // Effectuez une requête au serveur pour récupérer les données
    fetch('https://vivrivoire-api.onrender.com/get-cultures')  // Endpoint à créer sur le serveur pour récupérer les données
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Erreur lors de la récupération des données:', error));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/produit' element={<ProduitPage data={data}/>}/>
        <Route path='/documentation' element={<Documentation/>}/>
        <Route path='/panier' element={<Panier/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/documentation/article' element={<SingleArticlePage/>}/>
        <Route path='/produit/singleproduct' element={<SingleProductPage/>}/>
        <Route path='/articles' element={<Articles/>}/>
        <Route path='/ajouter' element={<AjouterProduit/>}/>
        <Route path='/afficher' element={<DisplayData/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
