import React, { Fragment, PureComponent } from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid,
   Tooltip, Legend,
    ResponsiveContainer,
    BarChart, 
     Bar } from 'recharts';

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
           <text x={x} y={y} dy={-4} fill="#fff" fontSize={13} textAnchor="middle">
             {value}
           </text>
         );
       }
     }

export default class Bargraph extends PureComponent {
  // static demoUrl = 'https://codesandbox.io/s/line-chart-with-customized-dot-7on4t';

  render() {
    return (
      <Fragment>
      <div className="heading">
      {/* <p className="service">Security</p> */}
      <ResponsiveContainer width="100%" height="100%">
      
      <BarChart data={pdata}    
         width={200} height={200} 
        backgroundColor="rgb(17, 17, 17)"
        margin={{
            top: 5, right: 60, left: 20, bottom: 10
        }}
        >
          <CartesianGrid 
          // strokeDasharray="3 3" 
          stroke="#fff"
        // horizontal="true" vertical=""
          />
          <XAxis 
          dataKey="name" 
          interval={'preserveStartEnd'} 
          tick={{ fill: "#fff"}}
          />
          <YAxis  
          tick={{ fill: "#fff"}}
          label={{ fill: "#fff", angle: -90, position: 'insideLeft' }}
           />
          <Tooltip />
          <Legend 
          verticalAlign="bottom" height={36} 
          
          />

          {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" dot={<CustomizedDot />} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
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
      //    label={<CustomizedLabel />}
          /> 

    
        </BarChart>
      </ResponsiveContainer>
      </div>
      </Fragment>
    );
  }
}


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
//     BarChart, 
//     Bar} from 'recharts';
// import Pie3d from './piechart';
// import './App.css';

// const pdata = [
//     {
//       name: 'Jan',
//       "Security(threats)": 18,
//       Low: 7, 
//       Medium: 5,
//       High: 4,
//       Critical: 2,
//     },
//     {
//       name: 'Feb',
//       Security: 16,
//       Low: 8,
//       Medium: 5,
//       High: 3,
//       Critical: 0,
//     },
//     {
//       name: 'March',
//       Security: 17,
//       Low: 8,
//       Medium: 6,
//       High: 2,
//       Critical: 1,
//     },
//     {
//       name: 'Apr',
//       security: 15,
//       Low: 9,
//       Medium: 5,
//       High: 1,
//       Critical: 0,
//     },
//     {
//       name: 'May',
//       Security: 14,
//       Low: 7,
//       Medium: 4,
//       High: 2,
//       Critical: 1,
//     },
//     {
//       name: 'Jun',
//       Security: 5,
//       Low: 3,
//       Medium: 3,
//       High: 0,
//       Critical: 0,
//     },
//     {
//         name: 'Jul',
//         Security: 11,
//         Low: 5,
//         Medium: 3,
//         High: 2,
//         Critical: 1,
//     },

//     {
//         name: 'Aug',
//         Security: 14,
//         Low: 7,
//         Medium: 3,
//         High: 2,
//        Critical: 2,
//     },

//     {
//         name: 'Sep',
//         Security: 13,
//         Low: 8,
//         Medium: 3,
//         High: 1,
//         Critical: 1,
//       },

//       {
//         name: 'Oct',
//         Security: 12,
//         Low: 6,
//         Medium: 4,
//         High: 2,
//         Critical: 0,
//       },

//       {
//         name: 'Nov',
//         Security: 17,
//         Low: 8,
//         Medium: 4,
//         High: 2,
//        Critical: 3,
//       },

//       {
//         name: 'Dec',
//         security: 14,
//         Low: 7,
//         Medium: 5,
//         High: 1,
//         Critical: 1,
//       },


//   ];


//   class CustomizedLabel extends PureComponent {
//     render() {
//       const { x, y, stroke, value } = this.props;
  
//       return (
//         <text x={x} y={y} dy={-4} fill="#fff" fontSize={13} textAnchor="middle">
//           {value}
//         </text>
//       );
//     }
//   }

// function BarGraph(){
//     return(
//      <> 
//      <div className="barchart">
//      <h3 className="manage">Vulnerabilities Management</h3>

//      <ResponsiveContainer 
     
//       aspect={3}>
       
//        <BarChart data={pdata} 
//         width={200} height={400} 
//        backgroundColor="rgb(17, 17, 17)"
//        margin={{
//            top: 5, right: 60, left: 20, bottom: 10
//        }}
//        > <BarChart data={pdata} 
//         width={200} height={400} 
//        backgroundColor="rgb(17, 17, 17)"
//        margin={{
//            top: 5, right: 60, left: 20, bottom: 10
//        }}
//        >
//        <CartesianGrid 
//         // strokeDasharray="1" 
//         //  strokeOpacity="#fff"
//         stroke="#fff"
//         horizontal="true" vertical=""
//        />
//         <XAxis dataKey="name" interval={'preserveStartEnd'} 
//         tick={{ fill: "#fff"}}
//             // tickFormatter={(value) => value + ' ' + "Programming"}
//         />
//         <YAxis tick={{ fill: "#fff"}} />
//         <Tooltip 
//         // contentStyle={{
//         //      backgroundColor:'yellow'
//         // }}
//          />
//         <Legend
//         margin={{
//            top: 30, right: 0, left: 2, bottom: 10
//        }} 
//          height={36} />

//         <Bar dataKey="Critical" fill="#1B9CFC"
//         //  label={<CustomizedLabel />}
//         />

//          <Bar 
//         //  type="monotone"
//          dataKey="High" 
//          fill="#ff7f50" 
//         //  label={<CustomizedLabel />}
//          /> 

//          <Bar 
//          dataKey="Medium" 
//          fill="#747d8c" 
//         //  label={<CustomizedLabel />}
//          /> 

//          <Bar
//          dataKey="Low" 
//          fill="#eccc68" 
//          label={<CustomizedLabel />}
//          />

//        </BarChart>
        
//        </ResponsiveContainer>
       
//       </div>
//      </>
//     );
// }

// export default BarGraph;