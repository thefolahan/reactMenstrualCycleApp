import React from "react";
import { FaStar } from "react-icons/fa";

const colours = {
    orange: "#FFBA5A",
    grey: "a9a9a9",
};

function Rate() {
    const stars = Array(5).fill(0);
    const [currentValue, setCurrentValue] = React.useState(0);
    const [hoverValue, setHoverValue] = React.useState(undefined);
    const [submitted, setSubmitted] = React.useState(false);

    const handleClick = (value) => {
        setCurrentValue(value);
    };

    const handleMouseOver = (value) => {
        setHoverValue(value);
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined);
    };

    const handleSubmit = () => {
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
        }, 1000);
    };

    return (
        <div style={styles.container}>
            <h1 className="header">Rate the web page:</h1>
            <div style={styles.stars}>
                {stars.map((_, index) => {
                    return (
                        <FaStar
                            key={index}
                            size={24}
                            style={{
                                marginRight: 10,
                                cursor: "pointer",
                            }}
                            color={(hoverValue || currentValue) > index ? colours.orange : colours.grey}
                            onClick={() => handleClick(index + 1)}
                            onMouseOver={() => handleMouseOver(index + 1)}
                            onMouseLeave={handleMouseLeave}
                        />
                    );
                })}
            </div>
            <textarea placeholder="Enter your feedback" style={styles.textarea} />
            <button style={styles.button} onClick={handleSubmit}>Submit</button>
            {submitted && <p>Feedback submitted</p>}
            <button onClick={() => (window.location.href = "/home")}>Home</button>
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundImage: `url(${require("../../../assets/images/wallpaper.png")})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
        boxSizing: "border-box",
        justifyContent: "center",
        margin: "0 auto",
    },

    header: {
        color: "white",
    },

    textarea: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        width: 500,
        margin: "20px 0",
        minHeight: 100,
        padding: 10,
    }
};
export default Rate;