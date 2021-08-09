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
    // {
    //     "name": "",
    //     "Throughput (mbps)": "",
    //     "Baseline": "",
    //   },
  {
    "name": "Jan",
    "Throughput (mbps)": 200,
    "Baseline": 300,
  },
  {
    "name": "Feb",
    "Throughput (mbps)": 250,
    "Baseline": 300,
  },
  {
    "name": "March",
    "Throughput (mbps)": 260,
    "Baseline": 300,
  },
  {
    "name": "Apr",
    "Throughput (mbps)": 280,
    "Baseline": 300,
  },
  {
    "name": "May",
    "Throughput (mbps)": 290,
    "Baseline": 300,
  },
  {
    "name": "Jun",
    "Throughput (mbps)": 330,
    "Baseline": 300,
  },
  {
    "name": "Jul",
    "Throughput (mbps)": 320,
    "Baseline": 300,
  },

  {
    "name": "Aug",
    "Throughput (mbps)": 300,
    "Baseline": 300,
  },

  {
    "name": "Sep",
    "Throughput (mbps)": 350,
    "Baseline": 300,
  },

  {
    "name": "Oct",
    "Throughput (mbps)": 360,
    "Baseline": 300,
  },

  {
    "name": "Nov",
    "Throughput (mbps)": 400,
    "Baseline": 300,
  },

  {
    "name": "Dec",
    "Throughput (mbps)": 380,
    "Baseline": 300,
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

function ComposedGraph(){
    return(
     <> 
     <div className="composedchart">
        <h3 className="service">Throughput</h3>
       <ResponsiveContainer width="100%" aspect={3}>
       
       <LineChart data={pdata} width={500} height={400} backgroundColor="rgb(17, 17, 17)"
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
        <YAxis 
        tick={{ fill: "#fff"}}
        label={{ value: "MBPS", fill: "#fff", angle: -90, position: 'insideLeft' }} />
        <Tooltip 
        // contentStyle={{
        //      backgroundColor:'yellow'
        // }}
         />
        <Legend verticalAlign="top" height={36} />

        <Line dataKey="Throughput (mbps)" stroke="#3742fa" strokeWidth={3} 
         activeDot={{ r: 4}} 
         
         dot={{ fill: "#3742fa"}}
          label={<CustomizedLabel />}
        />

         <Line 
        //  type="monotone"
         dataKey="Baseline" 
         stroke="#ff7f50" 
         strokeWidth={3} 
         activeDot={{ r: 4}} 
         strokeDasharray="5 5"
         dot={{ fill: "#ff7f50"}}
          // label={<CustomizedLabel />}
         /> 


       </LineChart>
       </ResponsiveContainer>
       </div>

     </>
    );
}

export default ComposedGraph;