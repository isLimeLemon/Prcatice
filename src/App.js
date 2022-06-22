import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/home';
import PopupScreen from './screens/popup';


function App() {

  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/popup" element={<PopupScreen/>}/>
        <Route path="/*" element={<HomeScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
