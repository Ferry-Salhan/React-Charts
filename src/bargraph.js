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
      "Security(threats)": 18,
      Low: 7, 
      Medium: 5,
      High: 4,
      Critical: 2,
    },
    {
      name: 'Feb',
      Security: 16,
      Low: 8,
      Medium: 5,
      High: 3,
      Critical: 0,
    },
    {
      name: 'March',
      Security: 17,
      Low: 8,
      Medium: 6,
      High: 2,
      Critical: 1,
    },
    {
      name: 'Apr',
      security: 15,
      Low: 9,
      Medium: 5,
      High: 1,
      Critical: 0,
    },
    {
      name: 'May',
      Security: 14,
      Low: 7,
      Medium: 4,
      High: 2,
      Critical: 1,
    },
    {
      name: 'Jun',
      Security: 5,
      Low: 3,
      Medium: 3,
      High: 0,
      Critical: 0,
    },
    {
        name: 'Jul',
        Security: 11,
        Low: 5,
        Medium: 3,
        High: 2,
        Critical: 1,
    },

    {
        name: 'Aug',
        Security: 14,
        Low: 7,
        Medium: 3,
        High: 2,
       Critical: 2,
    },

    {
        name: 'Sep',
        Security: 13,
        Low: 8,
        Medium: 3,
        High: 1,
        Critical: 1,
      },

      {
        name: 'Oct',
        Security: 12,
        Low: 6,
        Medium: 4,
        High: 2,
        Critical: 0,
      },

      {
        name: 'Nov',
        Security: 17,
        Low: 8,
        Medium: 4,
        High: 2,
       Critical: 3,
      },

      {
        name: 'Dec',
        security: 14,
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

function BarGraph(){
    return(
     <>
     <div className="barchart">
     <h3 className="manage">Vulnerabilities Management</h3>

     <ResponsiveContainer width="100%" aspect={3}>
       
       <BarChart data={pdata} width={500} height={400} backgroundColor="rgb(17, 17, 17)"
       margin={{
           top: 5, right: 60, left: 20, bottom: 10
       }}>
       <CartesianGrid 
        // strokeDasharray="1" 
        //  strokeOpacity="#fff"
        stroke="#fff"
        horizontal="true" vertical=""
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
        <Legend height={36} />

        <Bar dataKey="Critical" fill="#1B9CFC"
        //  label={<CustomizedLabel />}
        />

         <Bar 
        //  type="monotone"
         dataKey="High" 
         fill="#ff7f50" 
        //  label={<CustomizedLabel />}
         /> 

         <Bar 
         dataKey="Medium" 
         fill="#747d8c" 
        //  label={<CustomizedLabel />}
         /> 

         <Bar
         dataKey="Low" 
         fill="#eccc68" 
         label={<CustomizedLabel />}
         />

       </BarChart>
       </ResponsiveContainer>
       
     {/* <ResponsiveContainer width="100%" aspect={3}>
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
      </ResponsiveContainer> */}
      
       </div>

     </>
    );
}

export default BarGraph;