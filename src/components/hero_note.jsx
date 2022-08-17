import React from "react";
import Ring from "./ring";

function HeroNote() {

    const getDate = () => {
        let todaysDate = new Date();
        const weddingDate = new Date("2022-09-24");
        const diffInMs = Math.abs(weddingDate - todaysDate);
        return Math.ceil(diffInMs / (1000 * 60 *60 * 24)); 
    }

    return (
        <div className="heroNote_container">
            <h1 style={{fontSize: '2.5rem', fontWeight: '800'}}>CHISOMEJE <Ring /> IKECHUKWU</h1>
            <h6 style={{fontSize: '1.1rem', fontWeight: '800'}}>September 24, 2022. LEKKI-EPE. LAGOS</h6>
            <h6 style={{fontSize: '1.1rem', fontWeight: '800'}}>{getDate()} DAYS TO GO!</h6>
        </div>
    )
}

export default HeroNote;