import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const RangeProgress: React.FC<{progres: number, text: string, tests: number, art: number}> = ({
     progres, 
     text,
     tests,
     art 
    }) =>{
    return (
        <>
        <div className="circular-progres">
            <div className="all-materila">
                <div>Пройдено тестов: {tests}</div>
                <div>Изучено статей: {art}</div>
            </div>
            <div className="range-progres__text">Следующий ранг: <br/> {text}</div>
            <CircularProgressbar value={progres}></CircularProgressbar>
        </div>
        </>
    )
}

export default RangeProgress;