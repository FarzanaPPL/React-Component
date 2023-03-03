import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home/index'
import ProjectsList from './components/ProjectsList';
import './App.css';

const App=()=>(
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route exact path="/home"      element={<Home />} />
  <Route exact path="/profile"     element={<ProjectsList />} />
  </Routes>
  </BrowserRouter>

)

export default App