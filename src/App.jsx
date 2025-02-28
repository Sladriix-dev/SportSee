import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile'; // à créer

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
