import { createContext, useState } from 'react';

const ResultDefaultValue = {
  data: [],
};

export const ResultCtx = createContext(ResultDefaultValue);

// eslint-disable-next-line react/prop-types
const ResultCtxProvider = ({ children }) => {
  const [result, setResult] = useState(ResultDefaultValue.data);

  return (
    <ResultCtx.Provider value={{ result, setResult }}>
      {children}
    </ResultCtx.Provider>
  );
};

export default ResultCtxProvider;
