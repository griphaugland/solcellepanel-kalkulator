import React, { useState } from 'react';

const Range = () => {
  const [value, setValue] = useState(20);

  const handleSliderChange = (event) => {
    const newValue = event.target.value;
    const paneler = newValue / 2;
    const effekt = 405 * paneler / 1000;
    const enova = 7500 + 1250 * effekt;
    const pris = 18000 * effekt - enova;

    setValue(newValue);
  };

  const paneler = value / 2;
  const effekt = 405 * paneler / 1000;
  const enova = 7500 + 1250 * effekt;
  const pris = 18000 * effekt - enova;

  return (
    <div>
      <p>{value} kvadratmeter med solpaneler</p>
      <input
        value={value}
        type="range"
        min="20"
        max="150"
        className="slider"
        id="myRange"
        onChange={handleSliderChange} 
      />
      <div className='text-container'>
        <p>Antall solpaneler: </p><p className='numbers'>{parseInt(paneler)}</p>
        <p>Effekt: </p><p className='numbers'>{parseInt(effekt)}kWp</p>
        <p>Enovastøtte: </p><p className='numbers'>{parseInt(enova)}</p>
        <p>Prisestimat:</p><p className='numbers'>{parseInt(pris)}</p>
      </div>
    </div>
  );
};

export default Range;
