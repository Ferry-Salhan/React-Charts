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
    "name": "Jan",
    "Security (threats)": 18,
    "Baseline": 14,
  },
  {
    "name": "Feb",
    "Security (threats)": 16,
    "Baseline": 14,
  },
  {
    "name": "March",
    "Security (threats)": 17,
    "Baseline": 14,
  },
  {
    "name": "Apr",
    "Security (threats)": 15,
    "Baseline": 14,
  },
  {
    "name": "May",
    "Security (threats)": 14,
    "Baseline": 14,
  },
  {
    "name": "Jun",
    "Security (threats)": 5,
    "Baseline": 14,
  },
  {
    "name": "Jul",
    "Security (threats)": 11,
    "Baseline": 14,
  },

  {
    "name": "Aug",
    "Security (threats)": 14,
    "Baseline": 14,
  },

  {
    "name": "Sep",
    "Security (threats)": 13,
    "Baseline": 14,
  },

  {
    "name": "Oct",
    "Security (threats)": 12,
    "Baseline": 14,
  },

  {
    "name": "Nov",
    "Security (threats)": 17,
    "Baseline": 14,
  },

  {
    "name": "Dec",
    "Security (threats)": 14,
    "Baseline": 14,
  },

  // {
  //          "date": '8/1/2021',
  //          "Service Availability": "99.80%",
  //           "Baseline": "99.90%",
  //        },
    
  //        {
  //            "date": '8/2/2021',
  //            "Service Availability": "99.82%",
  //             "Baseline": "99.90%",
  //         },
    
  //       {
  //            "date": '8/3/2021',
  //           "Service Availability": "99.83%",
  //             "Baseline": "99.90%",
  //         },
    
  //         {
  //           "date": "8/4/2021",
  //            "Service Availability": "99.86%",
  //             "Baseline": "99.90%",
  //          },
    
  //          {
  //           date: '8/5/2021',
  //           "Service Availability": 99.91,
  //             Baseline: '99.90%',
  //         },
    
  //          {
  //           date: '8/6/2021',
  //           "Service Availability": 99.90,
  //             Baseline: '99.90%',
  //         },
    
  //         {
  //            date: '8/7/2021',
  //            "Service Availability": 99.85,
  //             Baseline: '99.90%',
  //         },
    
  //          {
  //           date: '8/8/2021',
  //            "Service Availability": 99.89,
  //             Baseline: '99.90%',
  //          },
    
  //          {
  //            date: '8/9/2021',
  //            "Service Availability": 99.87,
  //             Baseline: '99.90%',
  //          },
    
  //          {
  //            date: '8/10/2021',
  //            "Service Availability": 99.91,
  //             Baseline: '99.90%',
  //          },
    
  //         {
  //            date: '8/11/2021',
  //            "Service Availability": 99.88,
  //           Baseline: '99.90%',
  //          },
    
  //           {
  //          date: '8/12/2021',
  //          "Service Availability": 99.90,
  //           Baseline: '99.90%',
  //          },     
    


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
        <h3 className="service">Security</h3>
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
        <YAxis allowDecimals="true"
        tick={{ fill: "#fff"}}
        label={{ value: "THREATS", fill: "#fff", angle: -90, position: 'insideLeft' }} />
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

// import React, { PureComponent } from 'react';
// import { 
//     LineChart, 
//     Line, 
//     XAxis, 
//     YAxis, 
//     CartesianGrid, 
//     Tooltip, 
//     Legend, 
//     ResponsiveContainer, 
//     AreaChart,    
//     Area, 
//     ComposedChart,
//     BarChart, 
//     Bar} from 'recharts';
// import './App.css';

// const pdata = [
//     {
//       "name": "Page A",
//       "uv": 4000,
//       "pv": 2400,
//       "amt": 2400
//     },
//     {
//       "name": "Page B",
//       "uv": 3000,
//       "pv": 1398,
//       "amt": 2210
//     },
//     {
//       "name": "Page C",
//       "uv": 2000,
//       "pv": 9800,
//       "amt": 2290
//     },
//     {
//       "name": "Page D",
//       "uv": 2780,
//       "pv": 3908,
//       "amt": 2000
//     },
//     {
//       "name": "Page E",
//       "uv": 1890,
//       "pv": 4800,
//       "amt": 2181
//     },
//     {
//       "name": "Page F",
//       "uv": 2390,
//       "pv": 3800,
//       "amt": 2500
//     },
//     {
//       "name": "Page G",
//       "uv": 3490,
//       "pv": 4300,
//       "amt": 2100
//     }
//   ]
// // const pdata = [
// //     {
// //        date: '8/1/2021',
// //       "Service Availability": 99.80,
// //        Baseline: '99.90%',
// //     },

// //     {
// //         date: '8/2/2021',
// //         "Service Availability": 99.82,
// //          Baseline: '99.90%',
// //       },

// //       {
// //         date: '8/3/2021',
// //         "Service Availability": 99.83,
// //          Baseline: '99.90%',
// //       },

// //       {
// //         date: '8/4/2021',
// //         "Service Availability": 99.86,
// //          Baseline: '99.90%',
// //       },

// //       {
// //         date: '8/5/2021',
// //         "Service Availability": 99.91,
// //          Baseline: '99.90%',
// //       },

// //       {
// //         date: '8/6/2021',
// //         "Service Availability": 99.90,
// //          Baseline: '99.90%',
// //       },

// //       {
// //         date: '8/7/2021',
// //         "Service Availability": 99.85,
// //          Baseline: '99.90%',
// //       },

// //       {
// //         date: '8/8/2021',
// //         "Service Availability": 99.89,
// //          Baseline: '99.90%',
// //       },

// //       {
// //         date: '8/9/2021',
// //         "Service Availability": 99.87,
// //          Baseline: '99.90%',
// //       },

// //       {
// //         date: '8/10/2021',
// //         "Service Availability": 99.91,
// //          Baseline: '99.90%',
// //       },

// //       {
// //         date: '8/11/2021',
// //         "Service Availability": 99.88,
// //          Baseline: '99.90%',
// //       },

// //        {
// //         date: '8/12/2021',
// //         "Service Availability": 99.90,
// //          Baseline: '99.90%',
// //       },     

// //   ];

// function Composedchart(){
//     return(
//      <>
//      <div className="composedchart">
//         <h3 className="service">Service Availability</h3>
//        <ResponsiveContainer width="100%" aspect={3}>
       
//        <ComposedChart width={730} height={250} data={pdata} 
//         margin={{
//            top: 5, right: 200, left: 20, bottom: 10
//        }}>
//       <XAxis dataKey="date" />
//       <YAxis />
//       <Tooltip />
//       <Legend />
//      <CartesianGrid stroke="#f5f5f5" />
//       <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
//        <Bar dataKey="pv" barSize={20} fill="#413ea0" /> 
//       <Line type="monotone" dataKey="uv" stroke="#ff7300" />
//       </ComposedChart>
//        </ResponsiveContainer>
//        </div>

//      </>
//     );
// }

// export default Composedchart;