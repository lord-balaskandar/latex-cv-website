import './App.css';
import Intro from '../../pages/intro/intro';
import { Route, Routes } from 'react-router-dom';
import Experience from '../../pages/experience/experience';
import Qualifications from '../../pages/qualifications/qualifications';
import Skills from '../../pages/technicalSkills/technicalSkills';
import MP3Player from '../mp3Player/mp3Player';


function App() {
  return (
    <div className="App">
      <MP3Player/>
      <Routes>
        <Route path = "/" element={<Intro/>}/>
        <Route path = "/experience" element={<Experience/>}/>
        <Route path = "/qualifications" element={<Qualifications/>}/>
        <Route path = "/skills" element={<Skills/>}/>
      </Routes>
    </div>
  );
}

export default App;
