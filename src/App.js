import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMissions } from './redux/Missions/missionsSlice';
import Navbar from './components/Navbar';
import MyProfile from './components/Myprofile';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<MyProfile />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
