import React from 'react';
import './App.css';

// Toteuta React-komponentti Kortti, joka sisältää 
// Kortti-luokkaan kuuluvan div-elementin. Sijoita 
// div-elementin sisälle h1-otsikkoelementti sekä
// tekstikappale. Otsikon ja tekstin sisällöt saat
// valita vapaasti. 

//   + div (.Kortti)
//     + h1-otsikkoelementti
//     + tekstikappale
function Kortti() {
  return (
   <div className="Kortti">
     <h1>kokeilu</h1>
     <p>onnistuko nyt</p>
   </div>
  );
}

function App() {
  // Kutsu Kortti-komponenttia vähintään kerran
  // alla olevan div-elementin sisällä. 
  return (
    <div className="App">
     <Kortti />
    </div>
  );
}

export default App;