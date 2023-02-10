import { Routes, Route, BrowserRouter } from 'react-router-dom';

import './App.css';

import HomeScreen from './screens/HomeScreen';
import VerificarEmail from './screens/VerificaEmail';
import LoginScreen from './screens/LoginScreen';
import ValidateCode from './screens/ValidateCode';
import ResetPassword from './screens/ResetPassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<LoginScreen />} />
        <Route path={'/home'} element={<HomeScreen />} />
        <Route path={'/verificaremail'} element={<VerificarEmail/>} />
        <Route path={'/validatecode'} element={<ValidateCode/>} />
        <Route path={'/resetpassword'} element={<ResetPassword/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
