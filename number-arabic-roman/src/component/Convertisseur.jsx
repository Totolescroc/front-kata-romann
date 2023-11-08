import React, { useState } from 'react';

function Convertisseur() {
  const [chiffreArabe, setChiffreArabe] = useState('');
  const [chiffreRomain, setChiffreRomain] = useState('');
  const [conversionInverse, setConversionInverse] = useState(false);

  const handleChange = (e) => {
    setChiffreArabe(e.target.value);
  };

  const convertirChiffre = async () => {
    try {
      const route = conversionInverse ? 'reverse' : 'convert';

      const response = await fetch(`https://arab-to-roman-114f70a02b4f.herokuapp.com/${route}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(conversionInverse ? { roman: chiffreArabe } : { number: chiffreArabe }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la conversion.');
      }

      const data = await response.json();
      const resultat = conversionInverse ? data.arabic : data.roman;

      if (conversionInverse) {
        setChiffreRomain(resultat.toString());
      } else {
        setChiffreRomain(resultat);
      }
    } catch (error) {
      console.error(error);
      setChiffreRomain('Erreur de conversion');
    }
  };

  const toggleConversion = () => {
    setConversionInverse(!conversionInverse);
    setChiffreArabe('');
    setChiffreRomain('');
  };

  return (
    <div>
      <div className='container'>
        <h1>Convertisseur {conversionInverse ? 'Chiffre Romain en Chiffre Arabe' : 'Chiffre Arabe en Chiffre Romain'}</h1>
        <label htmlFor="chiffreArabe">{conversionInverse ? 'Entrez un chiffre romain :' : 'Entrez un chiffre entre 1 et 3999 :'}</label>
        <input
          type="text"
          id="chiffreArabe"
          placeholder={conversionInverse ? 'Entrez un chiffre romain' : 'Entrez un chiffre arabe'}
          value={chiffreArabe}
          maxLength={5}
          minLength={1}
          onChange={handleChange}
        />
        <button onClick={convertirChiffre}>{conversionInverse ? 'Convertir en Chiffre Arabe' : 'Convertir en Chiffre Romain'}</button>
        <label htmlFor="chiffreRomain">{conversionInverse ? 'Chiffre Arabe correspondant :' : 'Chiffre Romain correspondant :'}</label>
        <input type="text" id="chiffreRomain" value={chiffreRomain} readOnly />
        <button onClick={toggleConversion}>Inverse</button>
      </div>
    </div>
  );
}

export default Convertisseur;
