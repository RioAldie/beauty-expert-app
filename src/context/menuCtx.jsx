import { createContext, useState } from 'react';

const MenuDefaultValue = {
  value: 'Home',
};

export const MenuCtx = createContext(MenuDefaultValue);

// eslint-disable-next-line react/prop-types
const MenuCtxProvider = ({ children }) => {
  const [activate, setActivate] = useState(MenuDefaultValue.value);

  return (
    <MenuCtx.Provider value={{ activate, setActivate }}>
      {children}
    </MenuCtx.Provider>
  );
};

export default MenuCtxProvider;
