import React, {useState, useEffect} from 'react'
import Paper from '@material-ui/core/Paper';
import { ArgumentAxis, ValueAxis, Chart, BarSeries, Title, } from '@devexpress/dx-react-chart-material-ui';
import _ from 'lodash';


export default function Stats() {
    const [trainings, setTrainings] = useState([])

    useEffect(() => {
        getTrainData();
    }, [])

    const getTrainData = () => {
        fetch("https://customerrest.herokuapp.com/api/trainings")
        .then(response => response.json())
        .then(data => setTrainings(data.content))
        .catch(err => console.error(err))
    }
    
    
    const data = _(trainings).groupBy('activity').map((trainingData, key) => ({
        'activity': key,
        'duration': _.sumBy(trainingData, 'duration')
    })).value();

    return(
        <div style={{height: "40vh"}}>
            <Paper>
                <h2>Treeniaikalaskuri</h2>
                 <h5>Kuhunkin aktiviteettiin käytetyt minuutit</h5>
                <Chart data={data}>
                    <ArgumentAxis />
                    <ValueAxis position="left">
                    <Title text="Minuuttia" />
                    </ValueAxis>
                    <BarSeries valueField="duration" argumentField="activity" color="pink" />
                </Chart>
            </Paper>
            </div>
            
    )
}