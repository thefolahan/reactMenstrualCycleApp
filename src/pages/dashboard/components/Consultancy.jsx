import React from "react";
import "../styles/Consultancy.css"

function Consultancy() {
    return (
        <div className="consultancy-page">
            <div className="appointment">
                Book an appointment with a gynecologist near you:
            </div>
            <li><a href="https://southshorewch.com/contacts/" className="clinic" target='_blank' rel="noreferrer">South Shore Women's and Children's Hospital</a></li>
            <li><a href="https://bodet-medicare-maternity-center.business.site/?utm_source=gmb&utm_medium=referralv" className="clinic" target='_blank' rel="noreferrer">Bodet Medicare Maternity center</a></li>
            <li><a href="https://clinixhealthcare.com.ng/" className="clinic" target='_blank' rel="noreferrer">Clinix Diagnostic Centre</a></li>
            <li><a href="https://www.lifebridgeclinic.com/page/" className="clinic" target='_blank' rel="noreferrer">Lifebridge Clinic</a></li>
            <li><a href="https://medison-specialist-womens-hospital-fertility.business.site/" className="clinic" target='_blank' rel="noreferrer">Medison Specialist Women's Hospital</a></li>
            <button onClick={() => window.location.href="/home"}>Home</button>
        </div>
    )
}

export default Consultancy;