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
                "date": '8/1/2021',
                 "Service Availability": 99.80,
              "Baseline": 99.90,
                },
          
                {
                    "date": '8/2/2021',
                   "Service Availability": 99.82,
                    "Baseline": 99.90,
             },
          
               {
                    "date": '8/3/2021',
                   "Service Availability": 99.83,
                    "Baseline": 99.90,
                },
          
                 {
                   "date": "8/4/2021",
                    "Service Availability": 99.86,
                     "Baseline": 99.90,
                 },
          
              {
               date: '8/5/2021',
                  "Service Availability": 99.91,
                    Baseline: 99.90,
                 },
          
                  {
                   date: '8/6/2021',
                   "Service Availability": 99.90,
                     Baseline: 99.90,
                 },
          
                 {
                   date: '8/7/2021',
                    "Service Availability": 99.85,
                     Baseline: 99.90,
                 },
          
                 {
                   date: '8/8/2021',
                    "Service Availability": 99.89,
                     Baseline: 99.90,
                  },
          
                  {
                   date: '8/9/2021',
                    "Service Availability": 99.87,
                     Baseline: 99.90,
                  },
          
                  {
                    date: '8/10/2021',
                    "Service Availability": 99.91,
                     Baseline: 99.90,
                  },
          
                 {
                    date: '8/11/2021',
                    "Service Availability": 99.88,
                   Baseline: 99.90,
                  },
          
                   {
                  date: '8/12/2021',
                  "Service Availability": 99.90,
                   Baseline: 99.90,
                  },     
          

  ];

 class CustomizedLabel extends PureComponent {
    render() {
      const { x, y, stroke, value } = this.props;
  
      return (
        <text x={x} y={y} dy={-4} fill="#fff" fontSize={15} textAnchor="middle">
          {value + '%'}
        </text>
      );
    }
  }

function LinedashedChart(){
    return(
     <> 
     <div className="composedchart">
        <h3 className="service">Service Availability</h3>
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
        <XAxis dataKey="date" interval={'preserveStartEnd'} 
        tick={{ fill: "#fff"}}
            // tickFormatter={(value) => value + ' ' + "Programming"}
        />
        <YAxis 
        allowDecimals={true}
        type="number" domain={['auto', 'auto']}
        tick={{ fill: "#fff"}}
        // label={{ value: "MBPS", fill: "#fff", angle: -90, position: 'insideLeft' }}
         />
        <Tooltip 
        // contentStyle={{
        //      backgroundColor:'yellow'
        // }}
         />
        <Legend verticalAlign="top" height={36} />

        <Line dataKey="Service Availability" stroke="#3742fa" strokeWidth={3} 
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

export default LinedashedChart;