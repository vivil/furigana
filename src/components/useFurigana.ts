import { useContext } from 'react';
import FuriganaContext, { FuriganaContextType } from './FuriganaContext';

export const useFurigana = (): FuriganaContextType => {
  const context = useContext(FuriganaContext);
  if (context === undefined) {
    throw new Error('useFurigana must be used within a FuriganaProvider');
  }
  return context;
};
