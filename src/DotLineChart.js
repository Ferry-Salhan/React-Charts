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
                "month": 'Jan',
                 "Response Time (ms)": 58.85,
              "Baseline": 50.00,
                },
          
                {
                    "month": 'Feb',
                   "Response Time (ms)": 55.21,
                    "Baseline": 50.00,
             },
          
               {
                    "month": 'March',
                   "Response Time (ms)": 53.49,
                    "Baseline": 50.00,
                },
          
                 {
                    "month": 'Apr',
                    "Response Time (ms)": 51.03,
                     "Baseline": 50.00,
                 },
          
              {
                "month": 'May',
                  "Response Time (ms)": 45.89,
                    Baseline: 50.00,
                 },
          
                  {
                    "month": 'Jun',
                   "Response Time (ms)": 50.10,
                     Baseline: 50.00,
                 },
          
                 {
                    "month": 'July',
                    "Response Time (ms)": 46.22,
                     Baseline: 50.00,
                 },
          
                 {
                    "month": 'Aug',
                    "Response Time (ms)": 43.66,
                     Baseline: 50.00,
                  },
          
                  {
                    "month": 'Sep',
                    "Response Time (ms)": 45.63,
                     Baseline: 50.00,
                  },
          
                  {
                    "month": 'Oct',
                    "Response Time (ms)": 43.91,
                     Baseline: 50.00,
                  },
          
                 {
                    "month": 'Nov',
                    "Response Time (ms)": 49.06,
                   Baseline: 50.00,
                  },
          
                   {
                    "month": 'Dec',
                   "Response Time (ms)": 53.00,
                   Baseline: 50.00,
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

function DotlineChart(){
    return(
     <> 
     <div className="composedchart">
        <h3 className="service">Response Time (ms)</h3>
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
        <XAxis dataKey="month" interval={'preserveStartEnd'} 
        tick={{ fill: "#fff"}}
            // tickFormatter={(value) => value + ' ' + "Programming"}
        />
        <YAxis 
        allowDecimals={true}
        type="number" 
         domain={['auto', 'auto']}
        tick={{ fill: "#fff"}}
         label={{ value: "mili seconds (ms)", fill: "#fff", angle: -90, position: 'insideLeft' }}
         />
        <Tooltip 
        // contentStyle={{
        //      backgroundColor:'yellow'
        // }}
         />
        <Legend verticalAlign="top" height={36} />

        <Line dataKey="Response Time (ms)" stroke="#3742fa" strokeWidth={3} 
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

export default DotlineChart;