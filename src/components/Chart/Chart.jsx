import React, {useEffect, useState} from 'react'
import { fetchDailyData } from '../../api';
import {Line, Bar} from 'react-chartjs-2';
import styles from './Chart.module.css';


const Charts = ({data:{confirmed,deaths,recovered}, country}) => {
    const [dailyData, setDailyData] = useState([]);
    useEffect(() => {
        const fetchApi = async ()=>{
            setDailyData(await fetchDailyData())
        }
        
        fetchApi();
    },[])

    
    const lineChart = (
        dailyData.length ? (
            <Line
            data={{
                labels: dailyData.map(({date}) => date),
                datasets: [{
                    data: dailyData.map(({confirmed}) => confirmed),
                    label : 'Infected',
                    borderColor: '#6868fd',
                    fill : true,
                },
                {
                    data: dailyData.map(({deaths}) => deaths),
                    label : 'Deaths',
                    borderColor: 'red',
                    backgroundColor: '#f03333',
                    fill : true,
                }]
            }}
        />
        ) : null
        
    );

    
    const barChart = (
        confirmed ?
        (
            <Bar
            data = {{
                labels : ['Infected','Recovered','Deaths'],
                datasets: [{
                    backgroundColor: [
                        '#5b5bf7',
                        '#37d637',
                        '#fc3b3b',
                    ],
                    data : [confirmed.value, recovered.value, deaths.value],
                }],
                
            }}
            options = {{
                legend : {display: false},
                title : {display : true, text : `Current state in ${country}`},
            }}
            />
        ) : null
    )
    return(
        <div className={styles.container}>
           {
            country ? barChart : lineChart
           } 
            
        </div>
        

        
    )
}

export default Charts