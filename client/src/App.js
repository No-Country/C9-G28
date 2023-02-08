import { Routes, Route, BrowserRouter } from 'react-router-dom';

import './App.css';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<HomeScreen />} />
        <Route path={'/ingresar'} element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
