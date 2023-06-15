import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './view/components/layout/NavBar';
import Footer from './view/components/layout/Footer';
import Home from './view/components/paginas/Home';
import Projetos from './view/components/paginas/Projetos';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>

          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/projetos' element={<Projetos/>}></Route>
            <Route></Route> 
            <Route></Route>
            <Route></Route>
          </Routes>
      </Router>

      <Footer/>
    </div>
  );
}

export default App;
