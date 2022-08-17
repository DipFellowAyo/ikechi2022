import React from "react";

function Ring() {
    return (
        <div className="golden_rings_container">
            <img className="golden_rings" src={process.env.PUBLIC_URL+"/vectors/gold_rings.png"} alt="golden-rings" />
        </div>
    )
}

export default Ring;