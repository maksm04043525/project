import { useState } from 'react';
import AppRouter from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import { AuthContext } from './context';

const App = (props) => {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);

  return (
    <AuthContext.Provider value={
      isAuth,
      setIsAuth,
      isLoading
    }>
      <BrowserRouter>
        <NavBar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>

  );
};

export default App;
