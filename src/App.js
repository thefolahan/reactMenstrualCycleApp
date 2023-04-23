import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/dashboard/components/Home";
import Info from "./pages/dashboard/components/Info";
import Consultancy from "./pages/dashboard/components/Consultancy";
import About from "./pages/dashboard/components/About";
import Rate from "./pages/dashboard/components/Rate";
import MenstrualTracker from "./pages/dashboard/components/MenstrualTracker";

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/tracker" element={<MenstrualTracker />}/>
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