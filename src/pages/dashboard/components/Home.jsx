import React from "react";
import "../styles/Home.css"
import video from "../../../assets/videos/What is a period.mp4"

function Home() {
    return (
        <div className="home-page">
            <div className="topNav">
                <nav>
                    <p className="app-name">Mensis</p>
                    <button onClick={() => window.location.href="/tracker"}>Period calculator</button>
                    <button onClick={() => window.location.href="/calendar"}>Pregnancy calendar</button>
                    <button onClick={() => window.location.href="/info"}>Tips & advice</button>
                    <button onClick={() => window.location.href="/consultancy"}>Consult a gynecologist</button>
                    <button onClick={() => window.location.href="/about"}>About us</button>
                    <button onClick={() => window.location.href="/rate"}>Rate us</button>
                </nav>
            </div>
            <video className='clip' autoPlay loop>
                <source src={video} type='video/mp4' />
            </video>
            <footer>
                <ul>
                    <h1>Connect with us:</h1>
                    <li><a href="https://twitter.com/thefolahan">
                            <button>Twitter</button>
                    </a></li>
                    <li><a href="https://www.instagram.com/thefolahan/">
                            <button>Instagram</button>
                    </a></li>
                    <li><a href="https://github.com/9KICKS?tab=overview&from=2023-04-01&to=2023-04-26">
                            <button>GitHub</button>
                    </a></li>
                </ul>
            </footer>
        </div>
    );
}

export default Home;