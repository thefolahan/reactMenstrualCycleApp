import React, { useState, useRef } from 'react';
import Moment from 'moment';
import html2canvas from 'html2canvas';
import "../styles/MenstrualTracker.css"

function MenstrualTracker() {
    const [cycleLength, setCycleLength] = useState('');
    const [lastPeriodDate, setLastPeriodDate] = useState('');
    const [nextPeriodDate, setNextPeriodDate] = useState('');
    const [ovulationDate, setOvulationDate] = useState('');
    const [showInput, setShowInput] = useState(true);
    const [firstName, setFirstName] = useState('');
    const [age, setAge] = useState('');
    const resultRef = useRef(null);

    const calculateCycle = (e) => {
        e.preventDefault();
        const periodCycle = parseInt(cycleLength);
        const nextPeriod = Moment(lastPeriodDate).add(periodCycle, 'days');
        const ovulationDay = Moment(lastPeriodDate).add(periodCycle - 14, 'days');

        setNextPeriodDate(nextPeriod.format('Do MMMM YYYY'));
        setOvulationDate(ovulationDay.format('Do MMMM YYYY'));
        setShowInput(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowInput(false);
    }

    const handleScreenshot = () => {
        html2canvas(resultRef.current).then(canvas => {
            const imgData = canvas.toDataURL();
            const link = document.createElement('a');
            link.download = 'menstrual_result.png';
            link.href = imgData;
            link.click();
        });
    }

    return (
        <div className="tracker">
            {showInput ? (
                <form onSubmit={handleSubmit} className="input-form">
                    <label>
                        Enter your first name:
                        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </label>
                    <label>
                        Enter your age:
                        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} min="0" max="150" />
                        {age && age < 8 && <span className="error">You are too young</span>}
                    </label>
                    <button onClick={() => setShowInput(age < 8)} disabled={age && age < 8}>Continue</button>
                </form>
            ) : (
                <div ref={resultRef}>
                    <form onSubmit={calculateCycle} className="input-form">
                        <label>
                            Enter your cycle length (Days):
                            <input type="text" value={cycleLength} onChange={(e) => setCycleLength(e.target.value)} />
                        </label>
                        <label>
                            Enter your last period start date:
                            <input type="date" value={lastPeriodDate} onChange={(e) => setLastPeriodDate(e.target.value)} />
                        </label>
                        <input type="submit" value="Calculate" />
                    </form>
                    {nextPeriodDate && ovulationDate && (
                        <div>
                            <p>{firstName}'s next period: {nextPeriodDate}</p>
                            <p>{firstName}'s approximate ovulation day: {ovulationDate}</p>
                        </div>
                    )}
                </div>
            )}
            <button onClick={handleScreenshot}>Screenshot Result</button>
            <button onClick={() => (window.location.href = "/home")}>Home</button>
        </div>
    );
}

export default MenstrualTracker;