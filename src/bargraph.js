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
    Bar} from 'recharts';
import './App.css';

const pdata = [
    {
      name: 'Jan',
      "security(threats)": 18,
      low: 7, 
      medium: 5,
      high: 4,
      critical: 2,
    },
    {
      name: 'Feb',
      security: 16,
      low: 8,
      medium: 5,
      high: 3,
      critical: 0,
    },
    {
      name: 'March',
      security: 17,
      low: 8,
      medium: 6,
      high: 2,
      critical: 1,
    },
    {
      name: 'Apr',
      security: 15,
      low: 9,
      medium: 5,
      high: 1,
      critical: 0,
    },
    {
      name: 'May',
      security: 14,
      low: 7,
      medium: 4,
      high: 2,
      critical: 1,
    },
    {
      name: 'Jun',
      security: 5,
      low: 3,
      medium: 3,
      high: 0,
      critical: 0,
    },
    {
        name: 'Jul',
        security: 11,
        low: 5,
        medium: 3,
        high: 2,
        critical: 1,
    },

    {
        name: 'Aug',
        security: 14,
        low: 7,
        medium: 3,
        high: 2,
       critical: 2,
    },

    {
        name: 'Sep',
        security: 13,
        low: 8,
        medium: 3,
        high: 1,
        critical: 1,
      },

      {
        name: 'Oct',
        security: 12,
        low: 6,
        medium: 4,
        high: 2,
        critical: 0,
      },

      {
        name: 'Nov',
        security: 17,
        low: 8,
        medium: 4,
        high: 2,
       critical: 3,
      },

      {
        name: 'Dec',
        security: 14,
        low: 7,
        medium: 5,
        high: 1,
       critical: 1,
      },


  ];

function BarGraph(){
    return(
     <>
     <div className="barchart">
     <h3 className="manage">Vulnerabilities Management</h3>
       
     <ResponsiveContainer width="100%" aspect={3}>
       <BarChart width={500} height={400} data={pdata}
       margin={{
           top: 5, right: 200, left: 20, bottom: 10
       }}>
      <CartesianGrid strokeDasharray="3 3" />
     <XAxis dataKey="name" />
     <YAxis />
     <Tooltip />
     <Legend />
     <Bar dataKey="critical" fill="blue" />
     <Bar dataKey="high" fill="orange" />
     <Bar dataKey="medium" fill="grey" />
     <Bar dataKey="low" fill="yellow" />
      </BarChart>
      </ResponsiveContainer>
       {/* <ResponsiveContainer width="100%" aspect={3}>
       
       <LineChart data={pdata} width={500} height={400}
       margin={{
           top: 5, right: 200, left: 20, bottom: 10
       }}>
       <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" interval={'preserveStartEnd'} 
            // tickFormatter={(value) => value + ' ' + "Programming"}
        />
        <YAxis />
        <Tooltip contentStyle={{
             backgroundColor:'yellow'
        }} />
        <Legend />
        <Line type="monotone" dataKey="security" stroke="blue" strokeWidth={3} activeDot={{ r: 8}} />
         <Line type="monotone" dataKey="low" stroke="#8884d8" strokeWidth={3} activeDot={{ r: 8}} /> 
         <Line type="monotone" dataKey="medium" stroke="yellow" strokeWidth={3} activeDot={{ r: 8}} /> 
         <Line type="monotone" dataKey="high" stroke="grey" strokeWidth={3} activeDot={{ r: 8}} />
         <Line type="monotone" dataKey="critical" stroke="orange" strokeWidth={3} activeDot={{ r: 8}} /> 

       </LineChart>
       </ResponsiveContainer> */}
       </div>

     </>
    );
}

export default BarGraph;