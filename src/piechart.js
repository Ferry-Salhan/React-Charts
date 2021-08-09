import React, { PureComponent } from 'react';
import { 
    LineChart, 
    Line, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Legend, 
    ResponsiveContainer, 
    AreaChart, 
    Area, 
    BarChart,     
    Pie,
    PieChart,
    Bar} from 'recharts';
import './App.css';

const data01 = [
    {
     "Information Theft": 5,
     Malware: 2,
     Phishing: 3,
     Ransomware: 0,
     TechnicalExploits: 4,
     DDoSAttempts: 1,
     LossOfSystemAvailability:2
    },

    {
        value: 5,
        value: 2,
        value: 3,
        value: 0,
        value: 4,
        value: 1,
        value: 2
       }
]

function PieGraph(){
    return(
     <>
     <div className="linechart">
        <h3 className="threats">Threats</h3>
       <ResponsiveContainer width="100%" aspect={3}>
       
       <PieChart width={750} height={500} 
       margin={{
           top: 5, right: 200, left: 20, bottom: 10
       }}>
    <Pie data={data01} 
    dataKey="InformationTheft" 
    nameKey="name" 
     cx="50%" 
     cy="50%" 
    // outerRadius={50} 
    fill="#74b9ff" />
    <Pie 
    data={data01} 
    dataKey="Malware" 
    nameKey="name" 
     cx="50%" 
     cy="50%" 
    //  innerRadius={60} 
    // outerRadius={80} 
    fill="orange" label />
    <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="grey" />
    {/* <Pie data={data01} dataKey="Ransomware" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="yellow" label />
    <Pie data={data01} dataKey="TechnicalExploits" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#0652DD" />
    <Pie data={data01} dataKey="DDoSAttempts" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="green" label />
    <Pie data={data01} dataKey="LossOfSystemAvailability" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#1B1464" /> */}
    
   </PieChart>
       </ResponsiveContainer>
       </div>

     </>
    );
}

export default PieGraph;