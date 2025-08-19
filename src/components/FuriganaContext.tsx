import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

export interface FuriganaContextType {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  toggleFurigana: () => void;
}

const FuriganaContext = createContext<FuriganaContextType | undefined>(undefined);

export interface FuriganaProviderProps {
  children: ReactNode;
  defaultVisible?: boolean;
}

export const FuriganaProvider: React.FC<FuriganaProviderProps> = ({
  children,
  defaultVisible = true,
}) => {
  const [visible, setVisible] = useState(defaultVisible);

  const toggleFurigana = () => {
    setVisible(prev => !prev);
  };

  const value: FuriganaContextType = {
    visible,
    setVisible,
    toggleFurigana,
  };

  return (
    <FuriganaContext.Provider value={value}>
      {children}
    </FuriganaContext.Provider>
  );
};

export { FuriganaContext };
export default FuriganaContext;
