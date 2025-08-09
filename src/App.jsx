import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import './App.css'
import EventPage from './Pages/EventPage.jsx';
import Container from './Component/Container';
import VisitorCheckIn from './Pages/VisitorCheckIn.jsx'



function App() {

  return (
    <BrowserRouter>
    <Container >
    <div className="app">
      <nav className="navbar">
        <Link to="/"></Link>
        <Link to="/event"></Link>
      </nav>
      <Routes>
        <Route path="/" element={<VisitorCheckIn />} />
        <Route path="/event" element={<EventPage />} />
      </Routes>
    </div>
   </Container>
   </BrowserRouter>
  );
}

export default App
