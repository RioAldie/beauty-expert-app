import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import UserCtxProvider from './context/userCtx';
import ResultCtxProvider from './context/resultCtx';

function App() {
  return (
    <>
      <UserCtxProvider>
        <ResultCtxProvider>
          <Dashboard>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </BrowserRouter>
          </Dashboard>
        </ResultCtxProvider>
      </UserCtxProvider>
    </>
  );
}

export default App;
