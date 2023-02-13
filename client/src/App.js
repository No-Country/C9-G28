import { Routes, Route, BrowserRouter } from 'react-router-dom';

import './App.css';

import HomeScreen from './screens/HomeScreen';
import VerificarEmail from './screens/VerificaEmail';
import LoginScreen from './screens/LoginScreen';
import ValidateCode from './screens/ValidateCode';
import SpecialistScreen from './screens/SpecialistScreen';
import ScheduleScreen from './screens/ScheduleScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<LoginScreen />} />
        <Route path={'/home'} element={<HomeScreen />} />
        <Route path={'/verificaremail'} element={<VerificarEmail />} />
        <Route path={'/validatecode'} element={<ValidateCode />} />
        <Route path={'/specialists'} element={<SpecialistScreen />} />
        <Route path={'/schedule'} element={<ScheduleScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
