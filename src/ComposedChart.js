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
    ComposedChart,
    BarChart, 
    Bar} from 'recharts';
import './App.css';

const pdata = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    }
  ]
// const pdata = [
//     {
//        date: '8/1/2021',
//       "Service Availability": 99.80,
//        Baseline: '99.90%',
//     },

//     {
//         date: '8/2/2021',
//         "Service Availability": 99.82,
//          Baseline: '99.90%',
//       },

//       {
//         date: '8/3/2021',
//         "Service Availability": 99.83,
//          Baseline: '99.90%',
//       },

//       {
//         date: '8/4/2021',
//         "Service Availability": 99.86,
//          Baseline: '99.90%',
//       },

//       {
//         date: '8/5/2021',
//         "Service Availability": 99.91,
//          Baseline: '99.90%',
//       },

//       {
//         date: '8/6/2021',
//         "Service Availability": 99.90,
//          Baseline: '99.90%',
//       },

//       {
//         date: '8/7/2021',
//         "Service Availability": 99.85,
//          Baseline: '99.90%',
//       },

//       {
//         date: '8/8/2021',
//         "Service Availability": 99.89,
//          Baseline: '99.90%',
//       },

//       {
//         date: '8/9/2021',
//         "Service Availability": 99.87,
//          Baseline: '99.90%',
//       },

//       {
//         date: '8/10/2021',
//         "Service Availability": 99.91,
//          Baseline: '99.90%',
//       },

//       {
//         date: '8/11/2021',
//         "Service Availability": 99.88,
//          Baseline: '99.90%',
//       },

//        {
//         date: '8/12/2021',
//         "Service Availability": 99.90,
//          Baseline: '99.90%',
//       },     

//   ];

function Composedchart(){
    return(
     <>
     <div className="composedchart">
        <h3 className="service">Service Availability</h3>
       <ResponsiveContainer width="100%" aspect={3}>
       
       <ComposedChart width={730} height={250} data={pdata} 
        margin={{
           top: 5, right: 200, left: 20, bottom: 10
       }}>
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
     <CartesianGrid stroke="#f5f5f5" />
      <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
       <Bar dataKey="pv" barSize={20} fill="#413ea0" /> 
      <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </ComposedChart>
       </ResponsiveContainer>
       </div>

     </>
    );
}

export default Composedchart;