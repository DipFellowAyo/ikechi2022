import React, { useEffect, useState } from 'react';

const Countdown = () => {

    const [timer, setTimer] = useState({
        Months: "",
        Days: "",
        Hours: "",
        Minutes: "",
        Seconds: 1
    })
  
    const getDate = () => {
        let todaysDate = new Date();
        const weddingDate = new Date("2022-09-24");
        let diffInMs = Math.abs(weddingDate - todaysDate);
        let diffInDays = Math.ceil(diffInMs / (1000 * 60 *60 * 24));
        let Months = Math.floor(diffInDays / 30);
        let Days = diffInDays % 30 ;
        let Hours = Math.floor((diffInMs / 1000 / 60 / 60) % 24);
        let Minutes = Math.floor((diffInMs / 1000 / 60) % 60);
        let Seconds = Math.floor((diffInMs / 1000) % 60);
        return setTimer({
            Months: Months,
            Days: Days,
            Hours: Hours,
            Minutes: Minutes,
            Seconds: Seconds
        })
    }

    useEffect(() => {
        setInterval(() => {
            (getDate())
        }, 1000);
    }, [])

    
  return (
    <div>
        {timer.Months + timer.Days + timer.Hours + timer.Minutes + timer.Seconds <= 0 
        ? <div>
            <h1>Happy Married Life!🎉✨</h1>
        </div>
        : <div>
            <h3>we'll say yes in...</h3>
            <div className='countdown'>
                <div style= {{color: "#FFE5B4"}}>
                    <h1>{timer.Months}</h1>
                    <h3>Month</h3>
                </div>
                <div style= {{color: "#FFE5B4"}}>
                    <h1>{timer.Days}</h1>
                    <h3>Days</h3>
                </div>
                <div style= {{color: "#FFE5B4"}}>
                    <h1>{timer.Hours}</h1>
                    <h3>Hours</h3>
                </div>
                <div style= {{color: "#FFE5B4"}}>
                    <h1>{timer.Minutes}</h1>
                    <h3>Minutes</h3>
                </div>
                <div style= {{color: "#FFE5B4"}}>
                    <h1>{timer.Seconds}</h1>
                    <h3>Seconds</h3>
                </div>
            </div>
        </div>}
    </div>
  )
}

export default Countdown;