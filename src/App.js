import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Myprofile from './components/Myprofile';
import Rockets from './components/Rockets';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        {/* <Route path="/missions" element={<Missions />} /> */}
        <Route path="/profile" element={<Myprofile />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
