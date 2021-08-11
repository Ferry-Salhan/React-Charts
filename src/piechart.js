
// import React, { PureComponent } from 'react';
// import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

// const data = [
//   { name: 'Information Theft (Malicious Insider)', value: 5 },
//   { name: 'Malware', value: 2 },
//   { name: 'Phishing', value: 3 },
//   { name: 'Ransomware', value: 0 },
//   { name: 'Technical Exploits', value: 4 },
//   { name: 'DDoS Attacks', value: 1 },
//   { name: 'Loss of System Availability', value: 2 },
// ];

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   );
// };

// export default class Pie3d extends PureComponent {
//   // static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj';

//   render() {
//     return (
//       <div className="pieheading">
//       <ResponsiveContainer width="100%" height="100%">
//         <PieChart width={700} height={700}>
//           <Pie
//             data={data}
//             cx="50%"
//             cy="50%"
//             labelLine={false}
//             label={renderCustomizedLabel}
//             outerRadius={80}
//             fill="#8884d8"
//             dataKey="value"
//           >
//             {data.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//             ))}
//           </Pie>
//         </PieChart>
//       </ResponsiveContainer>
//       </div>
//     );
//   }
// }


import React from 'react';
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Pie3d = () => {
  
    const chartData = [
        {
          label: "Information Theft (Malicious Insider)",
          value: "5"
        },
        {
          label: "Malware",
          value: "2"
        },
        {
          label: "Phishing",
          value: "3"
        },
        {
          label: "Ransomware",
          value: "0"
        },
        {
          label: "Technical Exploits",
          value: "4"
        },
        {
          label: "DDoS Attacks",
          value: "1"
        },
        {
          label: "Loss of System Availability",
          value: "2"
        }
      ];

   const chartConfigs = {   
    type: "pie3d", // The chart type
    //  width: "700", 
      width: '600',
     height: '497',
  //   // Width of the chart
     // height: "600", 
  //     // Height of the 
     dataFormat: "json", // Data type
     dataSource: 
  //   {
  //     "chart": {
  //         "caption": "Threats",
  //         // "subCaption": "Last year",
  //         "enableSmartLabels": "0",
  //         "startingAngle": "0",
  //         "showPercentValues": "1",
  //         "decimals": "1",
  //         "useDataPlotColorForLabels": "1",
  //         theme: 'candy',
  //     },
  //     "data": [
  //         {
  //             "label": "Information Theft (Malicious Insider)",
  //             "value": "5"
  //         },
  //         {
  //             "label": "Malware",
  //             "value": "2"
  //         },
  //         {
  //             "label": "Phishing",
  //             "value": "3"
  //         },
  //         {
  //             "label": "Ransomware",
  //             "value": "0"
  //         },
  //         {
  //           "label": "Technical Exploits",
  //           "value": "4"
  //         },
  //         {
  //           "label": "DDoS Attacks",
  //           "value": "1"
  //         },
  //         {
  //           "label": "Loss of System Availability",
  //           "value": "2"
  //         },

  //     ]
  // }

    {
      // Chart Configuration
      chart: {
        //Set the chart caption
        // caption: "Countries With Most Oil Reserves [2017-18]",
        //Set the chart subcaption
        // subCaption: "In MMbbl = One Million barrels",
        //Set the x-axis name
        // xAxisName: "Country",
        //Set the y-axis name
        // yAxisName: "Reserves (MMbbl)",
        // numberSuffix: "K",
        //Set the theme for your chart
        // theme: "fusion",
        // caption: "Threats",
        // "showBorder": "1",
        // "borderThickness": "4",
        // "borderAlpha": "80",
        decimals: 0,
        doughnutRadius: "45%",
        showPercentValues: 0,
        theme: 'candy',
        
        // paletteColors: `"#f0db4f", "#ff7f50", "#3742fa"`,
      },
      // Chart Data
      data: chartData
    },

  };
  return(
      <div className="chart">
       <ReactFC {...chartConfigs} />; 
      </div>
  )   
};

// const Pie3D = () => {
//   return <div>chart</div>;
// };

export default Pie3d;



