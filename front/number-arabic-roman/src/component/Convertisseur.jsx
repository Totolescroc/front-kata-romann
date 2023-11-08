import React, { useState } from 'react';

function Convertisseur() {
  const [chiffreArabe, setChiffreArabe] = useState('');
  const [chiffreRomain, setChiffreRomain] = useState('');

  const handleChange = (e) => {
    setChiffreArabe(e.target.value);
  };

  const convertirChiffre = async () => {
    try {
      const response = await fetch('https://arab-to-roman-114f70a02b4f.herokuapp.com/convert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ number: chiffreArabe }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la conversion.');
      }

      const data = await response.json();
      const romanNumeral = data.roman;

      setChiffreRomain(romanNumeral);
    } catch (error) {
      console.error(error);
      setChiffreRomain('Erreur de conversion');
    }
  };

  return (
    <div>
      <h1>Convertisseur Chiffre Arabe en Chiffre Romain</h1>
      <label htmlFor="chiffreArabe">Entrez un chiffre arabe :</label>
      <input
        type="number"
        id="chiffreArabe"
        placeholder="Entrez un chiffre arabe"
        value={chiffreArabe}
        onChange={handleChange}
      />
      <button onClick={convertirChiffre}>Convertir</button>
      <label htmlFor="chiffreRomain">Chiffre Romain correspondant :</label>
      <input type="text" id="chiffreRomain" value={chiffreRomain} readOnly />
    </div>
  );
}

export default Convertisseur;
