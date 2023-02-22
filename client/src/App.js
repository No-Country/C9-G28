import { Routes, Route, BrowserRouter } from 'react-router-dom';

import './App.css';

import HomeScreen from './screens/HomeScreen';
import VerificarEmail from './screens/VerificaEmail';
import LoginScreen from './screens/LoginScreen';
import ValidateCode from './screens/ValidateCode';
import SpecialistScreen from './screens/SpecialistScreen';
import ScheduleScreen from './screens/ScheduleScreen';
import ResetPassword from './screens/ResetPassword';
import FormRegister from './screens/FormRegister';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<LoginScreen />} />
        <Route path={'/home'} element={<HomeScreen />} />
        <Route path={'/verificaremail'} element={<VerificarEmail />} />
        <Route path={'/validatecode'} element={<ValidateCode />} />
        <Route path={'/resetpassword'} element={<ResetPassword />} />
        <Route path={'/specialists'} element={<SpecialistScreen />} />
        <Route path={'/schedule/:id'} element={<ScheduleScreen />} />
        <Route path={'/register'} element={<FormRegister />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
