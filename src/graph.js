import React, { Fragment, PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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
          Medium: 2,
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
           Critical: 3,
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

const CustomizedDot = (props) => {
  const { cx, cy, stroke, payload, value } = props;

  if (value > 15) {
    return (
      <svg x={cx - 14} y={cy - 14} width={10} height={10} fill="green" 
      viewBox="0 0 1024 1024"
      >
        <path d="M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z" />
      </svg>
    );
  }

  return (
    <svg x={cx - 14} y={cy - 14} width={10} height={10} fill="red" 
    viewBox="0 0 1024 1024"
    >
      <path d="M517.12 53.248q95.232 0 179.2 36.352t145.92 98.304 98.304 145.92 36.352 179.2-36.352 179.2-98.304 145.92-145.92 98.304-179.2 36.352-179.2-36.352-145.92-98.304-98.304-145.92-36.352-179.2 36.352-179.2 98.304-145.92 145.92-98.304 179.2-36.352zM663.552 261.12q-15.36 0-28.16 6.656t-23.04 18.432-15.872 27.648-5.632 33.28q0 35.84 21.504 61.44t51.2 25.6 51.2-25.6 21.504-61.44q0-17.408-5.632-33.28t-15.872-27.648-23.04-18.432-28.16-6.656zM373.76 261.12q-29.696 0-50.688 25.088t-20.992 60.928 20.992 61.44 50.688 25.6 50.176-25.6 20.48-61.44-20.48-60.928-50.176-25.088zM520.192 602.112q-51.2 0-97.28 9.728t-82.944 27.648-62.464 41.472-35.84 51.2q-1.024 1.024-1.024 2.048-1.024 3.072-1.024 8.704t2.56 11.776 7.168 11.264 12.8 6.144q25.6-27.648 62.464-50.176 31.744-19.456 79.36-35.328t114.176-15.872q67.584 0 116.736 15.872t81.92 35.328q37.888 22.528 63.488 50.176 17.408-5.12 19.968-18.944t0.512-18.944-3.072-7.168-1.024-3.072q-26.624-55.296-100.352-88.576t-176.128-33.28z" />
    </svg>
  );
};

const CustomDot = (props) => {
  const { cx, cy, stroke, payload, value } = props;

  if (value > 5) {
    return (
      <svg x={cx - 14} y={cy - 14} width={10} height={10} fill="green" 
      viewBox="0 0 1024 1024"
      >
        <path d="M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z" />
      </svg>
    );
  }

  return (
    <svg x={cx - 14} y={cy - 14} width={10} height={10} fill="red" 
    viewBox="0 0 1024 1024"
    >
      <path d="M517.12 53.248q95.232 0 179.2 36.352t145.92 98.304 98.304 145.92 36.352 179.2-36.352 179.2-98.304 145.92-145.92 98.304-179.2 36.352-179.2-36.352-145.92-98.304-98.304-145.92-36.352-179.2 36.352-179.2 98.304-145.92 145.92-98.304 179.2-36.352zM663.552 261.12q-15.36 0-28.16 6.656t-23.04 18.432-15.872 27.648-5.632 33.28q0 35.84 21.504 61.44t51.2 25.6 51.2-25.6 21.504-61.44q0-17.408-5.632-33.28t-15.872-27.648-23.04-18.432-28.16-6.656zM373.76 261.12q-29.696 0-50.688 25.088t-20.992 60.928 20.992 61.44 50.688 25.6 50.176-25.6 20.48-61.44-20.48-60.928-50.176-25.088zM520.192 602.112q-51.2 0-97.28 9.728t-82.944 27.648-62.464 41.472-35.84 51.2q-1.024 1.024-1.024 2.048-1.024 3.072-1.024 8.704t2.56 11.776 7.168 11.264 12.8 6.144q25.6-27.648 62.464-50.176 31.744-19.456 79.36-35.328t114.176-15.872q67.584 0 116.736 15.872t81.92 35.328q37.888 22.528 63.488 50.176 17.408-5.12 19.968-18.944t0.512-18.944-3.072-7.168-1.024-3.072q-26.624-55.296-100.352-88.576t-176.128-33.28z" />
    </svg>
  );
};

const Newcustom = (props) => {
  const { cx, cy, stroke, payload, value } = props;

  if (value > 3) {
    return (
      <svg x={cx - 14} y={cy - 14} width={10} height={10} fill="green" 
      viewBox="0 0 1024 1024"
      >
        <path d="M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z" />
      </svg>
    );
  }

  return (
    <svg x={cx - 14} y={cy - 14} width={10} height={10} fill="red" 
    viewBox="0 0 1024 1024"
    >
      <path d="M517.12 53.248q95.232 0 179.2 36.352t145.92 98.304 98.304 145.92 36.352 179.2-36.352 179.2-98.304 145.92-145.92 98.304-179.2 36.352-179.2-36.352-145.92-98.304-98.304-145.92-36.352-179.2 36.352-179.2 98.304-145.92 145.92-98.304 179.2-36.352zM663.552 261.12q-15.36 0-28.16 6.656t-23.04 18.432-15.872 27.648-5.632 33.28q0 35.84 21.504 61.44t51.2 25.6 51.2-25.6 21.504-61.44q0-17.408-5.632-33.28t-15.872-27.648-23.04-18.432-28.16-6.656zM373.76 261.12q-29.696 0-50.688 25.088t-20.992 60.928 20.992 61.44 50.688 25.6 50.176-25.6 20.48-61.44-20.48-60.928-50.176-25.088zM520.192 602.112q-51.2 0-97.28 9.728t-82.944 27.648-62.464 41.472-35.84 51.2q-1.024 1.024-1.024 2.048-1.024 3.072-1.024 8.704t2.56 11.776 7.168 11.264 12.8 6.144q25.6-27.648 62.464-50.176 31.744-19.456 79.36-35.328t114.176-15.872q67.584 0 116.736 15.872t81.92 35.328q37.888 22.528 63.488 50.176 17.408-5.12 19.968-18.944t0.512-18.944-3.072-7.168-1.024-3.072q-26.624-55.296-100.352-88.576t-176.128-33.28z" />
    </svg>
  );
};

const Dot = (props) => {
  const { cx, cy, stroke, payload, value } = props;

  if (value > 2) {
    return (
      <svg x={cx - 14} y={cy - 14} width={10} height={10} fill="green" 
      viewBox="0 0 1024 1024"
      >
        <path d="M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z" />
      </svg>
    );
  }

  return (
    <svg x={cx - 14} y={cy - 14} width={10} height={10} fill="red" 
    viewBox="0 0 1024 1024"
    >
      <path d="M517.12 53.248q95.232 0 179.2 36.352t145.92 98.304 98.304 145.92 36.352 179.2-36.352 179.2-98.304 145.92-145.92 98.304-179.2 36.352-179.2-36.352-145.92-98.304-98.304-145.92-36.352-179.2 36.352-179.2 98.304-145.92 145.92-98.304 179.2-36.352zM663.552 261.12q-15.36 0-28.16 6.656t-23.04 18.432-15.872 27.648-5.632 33.28q0 35.84 21.504 61.44t51.2 25.6 51.2-25.6 21.504-61.44q0-17.408-5.632-33.28t-15.872-27.648-23.04-18.432-28.16-6.656zM373.76 261.12q-29.696 0-50.688 25.088t-20.992 60.928 20.992 61.44 50.688 25.6 50.176-25.6 20.48-61.44-20.48-60.928-50.176-25.088zM520.192 602.112q-51.2 0-97.28 9.728t-82.944 27.648-62.464 41.472-35.84 51.2q-1.024 1.024-1.024 2.048-1.024 3.072-1.024 8.704t2.56 11.776 7.168 11.264 12.8 6.144q25.6-27.648 62.464-50.176 31.744-19.456 79.36-35.328t114.176-15.872q67.584 0 116.736 15.872t81.92 35.328q37.888 22.528 63.488 50.176 17.408-5.12 19.968-18.944t0.512-18.944-3.072-7.168-1.024-3.072q-26.624-55.296-100.352-88.576t-176.128-33.28z" />
    </svg>
  );
};

const Dotvalue = (props) => {
  const { cx, cy, stroke, payload, value } = props;

  if (value > 0) {
    return (
      <svg x={cx - 14} y={cy - 14} width={10} height={10} fill="green" 
      viewBox="0 0 1024 1024"
      >
        <path d="M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z" />
      </svg>
    );
  }

  return (
    <svg x={cx - 14} y={cy - 14} width={10} height={10} fill="red" 
    viewBox="0 0 1024 1024"
    >
      <path d="M517.12 53.248q95.232 0 179.2 36.352t145.92 98.304 98.304 145.92 36.352 179.2-36.352 179.2-98.304 145.92-145.92 98.304-179.2 36.352-179.2-36.352-145.92-98.304-98.304-145.92-36.352-179.2 36.352-179.2 98.304-145.92 145.92-98.304 179.2-36.352zM663.552 261.12q-15.36 0-28.16 6.656t-23.04 18.432-15.872 27.648-5.632 33.28q0 35.84 21.504 61.44t51.2 25.6 51.2-25.6 21.504-61.44q0-17.408-5.632-33.28t-15.872-27.648-23.04-18.432-28.16-6.656zM373.76 261.12q-29.696 0-50.688 25.088t-20.992 60.928 20.992 61.44 50.688 25.6 50.176-25.6 20.48-61.44-20.48-60.928-50.176-25.088zM520.192 602.112q-51.2 0-97.28 9.728t-82.944 27.648-62.464 41.472-35.84 51.2q-1.024 1.024-1.024 2.048-1.024 3.072-1.024 8.704t2.56 11.776 7.168 11.264 12.8 6.144q25.6-27.648 62.464-50.176 31.744-19.456 79.36-35.328t114.176-15.872q67.584 0 116.736 15.872t81.92 35.328q37.888 22.528 63.488 50.176 17.408-5.12 19.968-18.944t0.512-18.944-3.072-7.168-1.024-3.072q-26.624-55.296-100.352-88.576t-176.128-33.28z" />
    </svg>
  );
};



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

export default class Graph extends PureComponent {
  // static demoUrl = 'https://codesandbox.io/s/line-chart-with-customized-dot-7on4t';

  render() {
    return (
      <Fragment>
      <div className="main">
      {/* <p className="service">Security</p> */}
      <h3 className="change">Vulnerability Change (Severity) Trend</h3>
      <ResponsiveContainer width="100%" aspect={3}>
      
        <LineChart
          width={500}
          height={300}
          data={pdata}
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
          <Legend verticalAlign="top" height={36} />

          {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" dot={<CustomizedDot />} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
          <Line dataKey="Security (threats)" 
          stroke="#3742fa" strokeWidth={3} 
          activeDot={{ r: 4}} 
         
          dot={<CustomizedDot />}
          label={<CustomizedLabel />}
         />

        <Line 
        dataKey="Low" 
         stroke="#6a89cc" 
         strokeWidth={3} 
          activeDot={{ r: 4}} 
         
          dot={<CustomDot />}
          label={<CustomizedLabel />}
         />
   
        <Line 
        dataKey="Medium" 
         stroke="#eccc68"  
        strokeWidth={3} 
          activeDot={{ r: 4}} 
         
          dot={<Newcustom />}
          label={<CustomizedLabel />}
         />

      <Line 
        dataKey="High" 
          stroke="#747d8c"  
        strokeWidth={3} 
          activeDot={{ r: 4}} 
         
          dot={<Dot />}
          label={<CustomizedLabel />}
         />

       <Line 
        dataKey="Critical" 
        stroke="#ffa502"   
        strokeWidth={3} 
          activeDot={{ r: 4}} 
         
          dot={<Dotvalue />}
          label={<CustomizedLabel />}
         />

        
        </LineChart>
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
// import './App.css';

// const pdata = [
//     {
//       name: 'Jan',
//       "Security (threats)": 18,
//       Low: 7, 
//       Medium: 5,
//       High: 4,
//       Critical: 2,
//     },
//     {
//       name: 'Feb',
//       "Security (threats)": 16,
//       Low: 8,
//       Medium: 5,
//       High: 3,
//       Critical: 0,
//     },
//     {
//       name: 'March',
//       "Security (threats)": 17,
//       Low: 8,
//       Medium: 6,
//       High: 2,
//       Critical: 1,
//     },
//     {
//       name: 'Apr',
//       "Security (threats)": 15,
//       Low: 9,
//       Medium: 5,
//       High: 1,
//       Critical: 0,
//     },
//     {
//       name: 'May',
//       "Security (threats)": 14,
//       Low: 7,
//       Medium: 4,
//       High: 2,
//       Critical: 1,
//     },
//     {
//       name: 'Jun',
//       "Security (threats)": 5,
//       Low: 3,
//       Medium: 3,
//       High: 0,
//       Critical: 0,
//     },
//     {
//         name: 'Jul',
//         "Security (threats)": 11,
//         Low: 5,
//         Medium: 3,
//         High: 2,
//         Critical: 1,
//     },

//     {
//         name: 'Aug',
//         "Security (threats)": 14,
//         Low: 7,
//         Medium: 3,
//         High: 2,
//        Critical: 2,
//     },

//     {
//         name: 'Sep',
//         "Security (threats)": 13,
//         Low: 8,
//         Medium: 3,
//         High: 1,
//         Critical: 1,
//       },

//       {
//         name: 'Oct',
//         "Security (threats)": 12,
//         Low: 6,
//         Medium: 4,
//         High: 2,
//         Critical: 0,
//       },

//       {
//         name: 'Nov',
//         "Security (threats)": 17,
//         Low: 8,
//         Medium: 4,
//         High: 2,
//        Critical: 2,
//       },

//       {
//         name: 'Dec',
//         "Security (threats)": 14,
//         Low: 7,
//         Medium: 5,
//         High: 1,
//        Critical: 1,
//       },


//   ];

//  class CustomizedLabel extends PureComponent {
//     render() {
//       const { x, y, stroke, value } = this.props;
  
//       return (
//         <text x={x} y={y} dy={-4} fill="#fff" fontSize={13} textAnchor="middle">
//           {value}
//         </text>
//       );
//     }
//   }

// function Graph(){
//     return(
//      <>
//       {/* <h1 className="chart-heading">ENTERPRISE SECURITY OVERVIEW</h1>  */}
//      <div className="linechart">
//         <h3 className="change">Vulnerability Change (Severity) Trend</h3>
//        <ResponsiveContainer width="100%" aspect={3}>
       
//        <LineChart data={pdata} width={500} height={400} backgroundColor="rgb(17, 17, 17)"
//        margin={{
//            top: 5, right: 60, left: 20, bottom: 10
//        }}
//        >
//        <CartesianGrid width="50%"
//         // strokeDasharray="1" 
//         //  strokeOpacity="#fff"
//         stroke="#a4b0be"
//       //  horizontal="true" vertical="true"
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
//         <Legend verticalAlign="top" height={36} />

//         <Line dataKey="Security (threats)" stroke="#3742fa" strokeWidth={3} 
//          activeDot={{ r: 4}} 
//          dot={{ fill: "#3742fa"}}
//          label={<CustomizedLabel />}
//         />

//          <Line 
//         //  type="monotone"
//          dataKey="Low" 
//          stroke="#70a1ff" 
//          strokeWidth={3} 
//          activeDot={{ r: 4}} 
//          dot={{ fill: "#70a1ff"}}
//          label={<CustomizedLabel />}
//          /> 

//          <Line 
//          dataKey="Medium" 
//          stroke="#eccc68" 
//          strokeWidth={3} 
//          dot={{ fill: "#eccc68"}}
//          activeDot={{ r: 4}} 
//          label={<CustomizedLabel />}
//          /> 

//          <Line 
//          dataKey="High" 
//          stroke="#747d8c" 
//          strokeWidth={3} 
//          activeDot={{ r: 4}} 
//          dot={{ fill: "#747d8c"}}
//          label={<CustomizedLabel />}
//          />
//          <Line 
//          dataKey="Critical" 
//          stroke="#ffa502" 
//          strokeWidth={3} 
//          activeDot={{ r: 4}} 
//          dot={{ fill: "#ffa502"}}
//          label={<CustomizedLabel />}
//          /> 

//        </LineChart>
//        </ResponsiveContainer>
//        </div>
//      </>
//     );
// }

// export default Graph;