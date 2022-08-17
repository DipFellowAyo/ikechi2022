import React from "react";

function CornerOrnamental() {
    return (
        <div className="corner_ornamental_container">
            <img className="corner_ornamental1" src={process.env.PUBLIC_URL+"/vectors/corner_ornamental.svg"} alt="corner_ornamental" />
            <img className="corner_ornamental2" src={process.env.PUBLIC_URL+"/vectors/corner_ornamental.svg"} alt="corner_ornamental" />
        </div>
    )
}

export default CornerOrnamental;