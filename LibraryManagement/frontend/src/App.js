import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Signup from './pages/SignupPage';
import Login from './pages/LoginPage';
import BookPage from './pages/BookPage';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path ='' element={<Navbar/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/bookForm' element={<BookPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
