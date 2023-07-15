import { useState, createContext } from "react";

const useValue = () => {
  const [user, setUser] = useState();
  return {
    user,
    setUser,
  };
};

const AppContext = createContext({});

const AppProvider = (props) => {
  return (
    <AppContext.Provider value={useValue()}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
