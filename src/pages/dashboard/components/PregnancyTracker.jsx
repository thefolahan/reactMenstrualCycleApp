import React from "react";
import "../styles/PregnancyTracker.css";

class PregnancyTracker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasHadSex: null,
            sexDate: null,
            estimatedDueDate: null
        };
        this.handleSexQuestion = this.handleSexQuestion.bind(this);
        this.handleDateInput = this.handleDateInput.bind(this);
        this.calculateDueDate = this.calculateDueDate.bind(this);
    }

    handleSexQuestion(event) {
        const hasHadSex = event.target.value === 'yes';
        this.setState({ hasHadSex });
    }

    handleDateInput(event) {
        const sexDate = new Date(event.target.value);
        this.setState({ sexDate });
    }

    calculateDueDate() {
        if (this.state.hasHadSex && this.state.sexDate) {
            const dueDate = new Date(this.state.sexDate.getTime() + (280 * 24 * 60 * 60 * 1000));
            this.setState({ estimatedDueDate: dueDate });
        }
    }

    render() {
        if (this.state.estimatedDueDate) {
            return (
                <div>
                    <p className="pregnancy-page">Your estimated due date is: {this.state.estimatedDueDate.toDateString()}
                        <button onClick={() => (window.location.href = "/home")}>Home</button>
                    </p>
                </div>
            );
        }

        return (
            <div className="pregnancy-page">
                <p>Have you had sex lately?</p>
                <label>
                    <input type="radio" name="sexQuestion" value="yes" onChange={this.handleSexQuestion} /> YES
                </label>
                <label>
                    <input type="radio" name="sexQuestion" value="no" onChange={this.handleSexQuestion} /> NO
                </label>
                {this.state.hasHadSex &&
                    <div>
                        <p>Enter the date of the last time you had sex:</p>
                        <input type="date" onChange={this.handleDateInput} />
                        <button onClick={this.calculateDueDate}>See Due Date</button>
                    </div>
                }
                <button onClick={() => (window.location.href = "/home")}>Home</button>
            </div>
        );
    }
}

export default PregnancyTracker;