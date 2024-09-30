import React, { useState } from 'react';
import CountryInfo from '../components/CountryInfo';

import dynamic from 'next/dynamic';

// Chargement dynamique pour éviter des erreurs de SSR (Server-Side Rendering)
const TestGlobe = dynamic(() => import('../components/Globe'), { ssr: false });

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [choosenCountryCode, setChoosenCountryCode] = useState(null);

  const handleCountryClick = (countryCode) => {
    setSelectedCountry(countryCode);
  };

  const handleContryChange = (countryCode) => {
      setChoosenCountryCode(countryCode);
  };

  return (
      <div style={{ width: '100vw', height: '100vh', position: 'relative', backgroundColor: '#0b014b' }}>
          <TestGlobe onCountryClick={handleCountryClick} choosenCountryCode={choosenCountryCode} />
          <div className="c-Countries-intro-inner container" style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              padding: '10px',
              color: '#fff',
              borderRadius: '5px',
              width: '300px'
          }}>
              <CountryInfo countryCode={selectedCountry} handleContryChange={handleContryChange} />
          </div>
      </div>
  );
}
