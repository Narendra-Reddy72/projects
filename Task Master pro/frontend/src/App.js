import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import UserSignupForm from './pages/UserSignupForm';
import Navbar from './components/Navbar';
import EventCreateForm from './pages/EventCreateForm';
import UserLoginForm from './pages/UserLoginForm ';
import EventList from './pages/EventList';
import EditEvents from './pages/EditEvents';
import EventCalendar from './pages/EventCalendar';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path=''element= {<Navbar/>}/>
          <Route path='/create' element={<UserSignupForm/>}/>
          <Route path='/login' element={<UserLoginForm/>}/>
          <Route path='/createEvent' element={<EventCreateForm/>}/>
          <Route path='/readEvent' element={<EventList/>}/>
          <Route path="/EditEvent/:event_id" element={<EditEvents />} />
          <Route path='Eventcalendar' element={<EventCalendar/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
