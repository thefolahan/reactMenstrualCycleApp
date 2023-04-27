import React from "react";
import "../styles/LandingPage.css"

function LandingPage() {
    return (
        <div className="landing-page">
                <div className="static-txt">Your</div>
                <ul className="dynamic-txts">
                    <li><span>Period Calculator 🩸</span></li>
                    <li><span>Pregnancy App 🤰🏽</span></li>
                    <li><span>Best Friend 🤝🏽</span></li>
                </ul>
            <button onClick={() => window.location.href="/home"}>Open MENSIS</button>
        </div>
    );
}

export default LandingPage;