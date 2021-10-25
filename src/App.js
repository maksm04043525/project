import { useState } from 'react';
import AppRouter from './components/AppRouter';
import {BrowserRouter} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

const App =(props)=> {
  return(
    <BrowserRouter>
      <NavBar/>
      <AppRouter/>
    </BrowserRouter>
  )

}
export default App;
