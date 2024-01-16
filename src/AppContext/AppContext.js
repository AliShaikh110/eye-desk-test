import { createContext, useContext, useState } from "react";


const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(null);

  const contextValue = {
    name,
    setName,
    address,
    setAddress,
    middleName,
    setMiddleName,
    phone,
    setPhone,
    date,
    setDate,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
