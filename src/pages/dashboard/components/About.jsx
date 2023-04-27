import React from "react";
import "../styles/About.css"

function About() {
    return (
        <div className="about-page">
            <h1 className="header">
                About the web designer:
            </h1>
            <text>
                Meet Omisakin Joshua Folahan, a 21-year-old full-stack engineer from Semicolon Africa who recently created this web page. <br/>
                With a passion for technology and a desire to learn, Folahan taught himself the skills necessary to bring his vision to life. <br/>
                He enjoys developing web pages that are both visually appealing and functional, and is constantly seeking new ways to improve his craft. <br/>
                When he's not coding, Folahan enjoys spending time with friends and family, listening to music, watching movies, watching sports, and gaming. <br/>
                As he continues to grow and develop his skills, he looks forward to creating even more innovative web pages that make a difference in people's lives. <br/>
                <li><a href="https://github.com/9KICKS?tab=overview&from=2023-04-01&to=2023-04-23" className="github">Follow on GitHub</a></li>
            </text>
            <button onClick={() => window.location.href="/home"}>Home</button>
        </div>
    )
}

export default About;