import {
  Routes, Route
} from "react-router-dom";
import './App.css';
import LandingPage from './pages/landing-page/LandingPage';
import ProjectsList from "./pages/projects-list/ProjectsList";
import ProjectOne from "./projects/one/ProjectOne";
import HeaderBar from "./components/header-bar/HeaderBar";

function App() {
  return (
    <div className="App">
    <Routes>
        <Route  path="/" element={<LandingPage />} />
        <Route  path="/projects"   >
            <Route  index element={<ProjectsList />} />
            <Route  path="project1" element={<ProjectOne />} />
        </Route>
    </Routes>
    </div>
  );
}

export default App;
