import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Ayuda from './components/Ayuda';
import Header from './components/Header';


function App() {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/ayuda' element={<Ayuda />}/>
        </Routes>
      </Router>
  );
}

export default App;
