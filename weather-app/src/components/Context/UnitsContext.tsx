import React, { createContext, useContext, useState, ReactNode } from 'react';

type Units = 'metric' | 'imperial';

interface UnitsContextType {
  units: Units;
  setUnits: (units: Units) => void;
}

const UnitsContext = createContext<UnitsContextType | undefined>(undefined);

export const UnitsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [units, setUnits] = useState<Units>('metric');

  return (
    <UnitsContext.Provider value={{ units, setUnits }}>
      {children}
    </UnitsContext.Provider>
  );
};

export const useUnits = () => {
  const context = useContext(UnitsContext);
  if (!context) {
    throw new Error('useUnits must be used within a UnitsProvider');
  }
  return context;
};
