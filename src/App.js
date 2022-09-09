import './App.css';
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/Navbar';
import Films from './Film/components/Films';
import FilmDetail from './Film/components/FilmDetail';
function App() {
  return (
 <Router>
  <Navbar/>
  <div className='container'>
  <Routes>
   <Route  path='/' element={<Films/>}/>
   <Route  path='/film/:id' element={<FilmDetail/>}/>
  </Routes>
  </div>
 </Router>

  );
}

export default App;
