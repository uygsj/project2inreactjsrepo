
import React, { createContext, useState, useContext } from 'react';

export const CandyContext = createContext();

export const CandyProvider = ({ children }) => {
  const [candies, setCandies] = useState([]);

  const addCandy = (candy) => {
    setCandies([...candies, candy]);
  };

  return (
    <CandyContext.Provider value={{ candies, addCandy }}>
      {children}
    </CandyContext.Provider>
  );
};

export const useCandy = () => {
  const context = useContext(CandyContext);
  if (!context) {
    throw new Error('useCandy must be used within a CandyProvider');
  }
  return context;
};
