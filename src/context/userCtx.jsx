import { createContext, useState } from 'react';

const UserDefaultValue = {
  data: [],
};

export const UserCtx = createContext(UserDefaultValue);

// eslint-disable-next-line react/prop-types
const UserCtxProvider = ({ children }) => {
  const [userValue, setUserValue] = useState(UserDefaultValue.data);

  return (
    <UserCtx.Provider value={{ userValue, setUserValue }}>
      {children}
    </UserCtx.Provider>
  );
};

export default UserCtxProvider;
