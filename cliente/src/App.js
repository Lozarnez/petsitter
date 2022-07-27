import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import Navbar from './components/navbar/navbar';
import {links} from './constants/links';
import PetSitters from './pages/petSitters';

function App() {
  return (
    <>
      <Navbar links={links} />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/petSitters" element={<PetSitters />} />
      </Routes>
    </>
  );
}

export default App;
