import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppNavbar from './components/Home/AppNavbar';
import Filters from './components/Home/Filters';
import Header from './components/Home/Header';
import MainNavbar from './components/Home/MainNavbar';
import Popup from './components/Home/Popup';
import Products from './components/Home/Products';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <MainNavbar />
      <Header />
      <Filters /> 
      <Products />
      <Routes>
        <Route path='rays' element={<Popup/>} />
      </Routes>
    </div>
  );
}

export default App;
