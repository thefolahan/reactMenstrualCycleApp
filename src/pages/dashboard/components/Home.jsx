import React from "react";
import "../styles/Home.css"
import video from "../../../assets/videos/Web video.mp4"

function Home() {
    return (
        <div className="home-page">
            <div className="topNav">
                <nav>
                    <p className="app-name">Menstrual Cycle 🤰🏽</p>
                    <button onClick={() => window.location.href="/tracker"}>View estimated menstrual cycle</button>
                    <button onClick={() => window.location.href="/info"}>Info on your menstrual cycle</button>
                    <button onClick={() => window.location.href="/consultancy"}>Consult a gynecologist</button>
                    <button onClick={() => window.location.href="/about"}>About us</button>
                    <button onClick={() => window.location.href="/rate"}>Rate us</button>
                </nav>
            </div>
            <video className='clip' autoPlay loop>
                <source src={video} type='video/mp4' />
            </video>
        </div>
    );
}

export default Home;