import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector } from "recharts";

const PieCharts: React.FC<{test: number, art: number}> = ({test, art}) =>{
    return (
        <>
        <h3 className="mb-4">Вся активность:</h3>
        <div>Выполненно тестов: {test}</div>
        <div>Изучено статей: {art}</div>
        </>
    );
}

export default PieCharts;