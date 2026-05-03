import { createContext, useContext, ReactNode, useMemo } from 'react';

type AppContextType = object;

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: Readonly<{ children: ReactNode }>) {
  const value = useMemo(() => ({}), []);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
}
