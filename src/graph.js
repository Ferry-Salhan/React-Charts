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
      "Security (threats)": 18,
      Low: 7, 
      Medium: 5,
      High: 4,
      Critical: 2,
    },
    {
      name: 'Feb',
      "Security (threats)": 16,
      Low: 8,
      Medium: 5,
      High: 3,
      Critical: 0,
    },
    {
      name: 'March',
      "Security (threats)": 17,
      Low: 8,
      Medium: 6,
      High: 2,
      Critical: 1,
    },
    {
      name: 'Apr',
      "Security (threats)": 15,
      Low: 9,
      Medium: 5,
      High: 1,
      Critical: 0,
    },
    {
      name: 'May',
      "Security (threats)": 14,
      Low: 7,
      Medium: 4,
      High: 2,
      Critical: 1,
    },
    {
      name: 'Jun',
      "Security (threats)": 5,
      Low: 3,
      Medium: 3,
      High: 0,
      Critical: 0,
    },
    {
        name: 'Jul',
        "Security (threats)": 11,
        Low: 5,
        Medium: 3,
        High: 2,
        Critical: 1,
    },

    {
        name: 'Aug',
        "Security (threats)": 14,
        Low: 7,
        Medium: 3,
        High: 2,
       Critical: 2,
    },

    {
        name: 'Sep',
        "Security (threats)": 13,
        Low: 8,
        Medium: 3,
        High: 1,
        Critical: 1,
      },

      {
        name: 'Oct',
        "Security (threats)": 12,
        Low: 6,
        Medium: 4,
        High: 2,
        Critical: 0,
      },

      {
        name: 'Nov',
        "Security (threats)": 17,
        Low: 8,
        Medium: 4,
        High: 2,
       Critical: 2,
      },

      {
        name: 'Dec',
        "Security (threats)": 14,
        Low: 7,
        Medium: 5,
        High: 1,
       Critical: 1,
      },


  ];

 class CustomizedLabel extends PureComponent {
    render() {
      const { x, y, stroke, value } = this.props;
  
      return (
        <text x={x} y={y} dy={-4} fill="#fff" fontSize={15} textAnchor="middle">
          {value}
        </text>
      );
    }
  }

function Graph(){
    return(
     <>
     <div className="linechart">
        <h1 className="chart-heading">ENTERPRISE SECURITY OVERVIEW</h1> 
        <h3 className="change">Vulnerability Change (Severity) Trend</h3>
       <ResponsiveContainer width="100%" aspect={3}>
       
       <LineChart data={pdata} width={500} height={400} backgroundColor="rgb(17, 17, 17)"
       margin={{
           top: 5, right: 60, left: 20, bottom: 10
       }}>
       <CartesianGrid 
        // strokeDasharray="1" 
        //  strokeOpacity="#fff"
        stroke="#a4b0be"
      //  horizontal="true" vertical="true"
       />
        <XAxis dataKey="name" interval={'preserveStartEnd'} 
        tick={{ fill: "#fff"}}
            // tickFormatter={(value) => value + ' ' + "Programming"}
        />
        <YAxis tick={{ fill: "#fff"}} />
        <Tooltip 
        // contentStyle={{
        //      backgroundColor:'yellow'
        // }}
         />
        <Legend verticalAlign="top" height={36} />

        <Line dataKey="Security (threats)" stroke="#3742fa" strokeWidth={3} 
         activeDot={{ r: 4}} 
         dot={{ fill: "#3742fa"}}
         label={<CustomizedLabel />}
        />

         <Line 
        //  type="monotone"
         dataKey="Low" 
         stroke="#70a1ff" 
         strokeWidth={3} 
         activeDot={{ r: 4}} 
         dot={{ fill: "#70a1ff"}}
         label={<CustomizedLabel />}
         /> 

         <Line 
         dataKey="Medium" 
         stroke="#eccc68" 
         strokeWidth={3} 
         dot={{ fill: "#eccc68"}}
         activeDot={{ r: 4}} 
         label={<CustomizedLabel />}
         /> 

         <Line 
         dataKey="High" 
         stroke="#747d8c" 
         strokeWidth={3} 
         activeDot={{ r: 4}} 
         dot={{ fill: "#747d8c"}}
         label={<CustomizedLabel />}
         />
         <Line 
         dataKey="Critical" 
         stroke="#ffa502" 
         strokeWidth={3} 
         activeDot={{ r: 4}} 
         dot={{ fill: "#ffa502"}}
         label={<CustomizedLabel />}
         /> 

       </LineChart>
       </ResponsiveContainer>
       </div>

     </>
    );
}

export default Graph;