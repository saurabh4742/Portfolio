"use client"
import React, { createContext, useContext, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Admin from '@/Interfaces/Admin';
// Admin and Employer interfaces go here

// Create a context
interface ContextType {
  userAdmin: Admin | null;
  setUserAdmin: React.Dispatch<React.SetStateAction<Admin | null>>;
}

export const MyContext = createContext({} as ContextType);

interface MyContextProviderProps {
  children: React.ReactNode;
}
export const MyContextProvider = ({ children }: MyContextProviderProps) => {
  const [userAdmin, setUserAdmin] = useState<Admin | null>(null);
  return (
    <MyContext.Provider value={{ userAdmin, setUserAdmin }}>
      {children}
      <Toaster/>
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
