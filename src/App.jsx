
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Gestion from './pages/Gestion/Gestion';
import Home from './pages/Home/Home';
import Productos from './pages/Productos/Productos';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='productos' element={<Productos />} />
        <Route path='gestion' element={<Gestion />} />
      </Routes>
    </Router>

  );
}

export default App;
