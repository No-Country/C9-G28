import { Routes, Route, BrowserRouter } from 'react-router-dom';

import './App.css';
import LoginScreen from './screens/LoginScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<LoginScreen/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
