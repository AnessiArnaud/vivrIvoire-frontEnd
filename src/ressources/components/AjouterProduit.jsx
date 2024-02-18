import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import nextSvg from '../icones/next.svg'

const AjouterProduit = () => {

  const navigate=useNavigate()
  const goTo=()=>{
      navigate('/produit')
  }

  const [culture, setCulture] = useState('');
  const [qty, setQty] = useState('');
  const [image, setImage] = useState(null);
  const [city, setCity] = useState('');

  /*const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };*/

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('culture', culture);
      formData.append('qty', qty);
      formData.append('city', city);
      formData.append('image', image);

      await fetch('https://vivrivoire-api.onrender.com/save-culture', {
        method: 'POST',
        body: formData,
      });

      alert('Votre produit a été enregistré');
      
    } catch (error) {
      console.error('Erreur lors de l\'envoi des données du formulaire:', error);
    }
  };

  return (
    <div>
      <div className='nextBtn'>
        <img src={nextSvg} alt="" onClick={goTo}/>
      </div>
      <form onSubmit={handleSubmit} className='addContainer'>
      <label htmlFor="culture">Type de culture</label>
      <select name="culture" id="culture" value={culture} onChange={(e) => setCulture(e.target.value)}>
        <optgroup>
          <option value="Ail">Ail</option>
          <option value="Arachide">Arachide</option>
          <option value="Aubergine">Aubergine</option>
          <option value="Banane plantain">Banane plantain</option>
          <option value="Carote">Carote</option>
          <option value="Gombo">Gombo</option>
          <option value="Igname">Igname</option>
          <option value="Mais">Mais</option>
          <option value="Manioc">Manioc</option>
          <option value="Oignon">Oignon</option>
          <option value="Noix de coco">Noix de coco</option>
          <option value="Patate douce">Patate douce</option>
          <option value="Piment">Piment</option>
          <option value="Taro">Taro</option>
          <option value="Tomate">Tomate</option>
        </optgroup>
      </select>

      <label htmlFor="qty">Quantité disponible en Kg</label>
      <input type="text" name="qty" id="qty" value={qty} onChange={(e) => setQty(e.target.value)} />

      <label htmlFor="city">Emplacement</label>
      <input type="text" name="city" id="city" value={city} onChange={(e) => setCity(e.target.value)} />

      {/**
       * <label htmlFor="image">Ajouter une image</label>
      <input type="file" name="image" id="image" onChange={handleImageChange} />
       */}

      <input type="submit" value="Enregistrer" className="Btn" id='addBtn'/>
    </form>
    </div>
   
  );
};

export default AjouterProduit