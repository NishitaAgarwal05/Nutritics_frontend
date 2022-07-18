import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS} from "chart.js/auto";
const LineChart = ({charData}) => {
   
    return ( 
        <Line data={charData} options={{
            scales: {
                y: {
                    min: 20,
                    max: 200,
                    ticks: {
                        // forces step size to be 50 units
                        stepSize: 10
                      }
                }
            }
        }
        }/>
     );
}
 
export default LineChart;