import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/dashboard/components/LandingPage";
import Home from "./pages/dashboard/components/Home";
import MenstrualTracker from "./pages/dashboard/components/MenstrualTracker";
import PregnancyTracker from "./pages/dashboard/components/PregnancyTracker";
import Info from "./pages/dashboard/components/Info";
import Consultancy from "./pages/dashboard/components/Consultancy";
import About from "./pages/dashboard/components/About";
import Rate from "./pages/dashboard/components/Rate";

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />}/>
                <Route path="/home" element={<Home />}/>
                <Route path="/tracker" element={<MenstrualTracker />}/>
                <Route path="/calendar" element={<PregnancyTracker />}/>
                <Route path="/info" element={<Info />}/>
                <Route path="/consultancy" element={<Consultancy />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/rate" element={<Rate />}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;