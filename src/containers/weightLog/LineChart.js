import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS} from "chart.js/auto";
const LineChart = ({charData}) => {
   
    return ( 
        <Line data={charData} />
     );
}
 
export default LineChart;