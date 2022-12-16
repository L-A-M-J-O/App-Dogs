import './App.css';
import {Switch as Routes, Route} from 'react-router-dom'
import { Header } from './pages/Header';
import { Home } from './pages/Home';
import { Footer } from './pages/Footer';

function App() {
  return (
    <>
    <Routes>
      <Header/>
      <Home/>
          <Route path="" element={''} />
      <Footer/>
    </Routes>
    </>
  );
}

export default App;
