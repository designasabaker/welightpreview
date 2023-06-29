import React, {useState, createContext, useContext} from 'react';

export const LANG = {
    EN: "en",
    CN: "cn",
}
export const AppContext = createContext({});

function UserProvider({children}) {
  const [hasLoggedIn, setHasLoggedIn] = useState(false);
  const [lang, setLang] = useState(LANG.EN);

  return (
      <AppContext.Provider value={{hasLoggedIn, setHasLoggedIn, lang, setLang}}>
        {children}
      </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);

export default UserProvider;