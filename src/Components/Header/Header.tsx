// src/components/Header.tsx
import React, { useState } from 'react';
import './Styles.css';

const Header: React.FC = () => {
  const [isSearchActive, setIsSearchActive] = useState(false); // Controla o estado de SEARCH
  const [searchValue, setSearchValue] = useState(''); // Valor do input

  const handleMouseEnter = () => setIsSearchActive(true);
  const handleMouseLeave = () => {
    if (!searchValue) setIsSearchActive(false); // Retorna ao texto apenas se o input estiver vazio
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <>   
      <div className='main-container'>
        <div className='container'>
          <div className='namespace'>
            <div className='vetra-hover'>
              <p className='vetra-name'>V</p>
              <p className='vetra-letter'>E</p>
              <p className='vetra-name-2'>TRA</p>
              <p className='vetra-letter'>.</p>
            </div>
          </div>
          <div className='optionspace'>
            <p className='option-vetra'>SERVICES</p>
            <p className='option-vetra'>OUR CLIENTS</p>
            <p className='option-vetra-quote'>QUOTE</p>
            <div
              className='search-container'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {isSearchActive ? (
                <input
                  type='text'
                  className='search-input'
                  placeholder='Search...'
                  value={searchValue}
                  onChange={handleInputChange}
                  autoFocus
                />
              ) : (
                <p className='option-vetra'>SEARCH</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
