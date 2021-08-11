import React, { Fragment } from 'react';
import Graph from './graph';
import BarGraph from './bargraph';
import PieGraph from './piechart';
import ComposedChart from './ComposedChart';
import Dashedchart from './DashedChart';
import LineDashedChart from './LinedashedChart';
import DotlineChart from './DotLineChart';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className="app">
     <h1 className="chart-heading">ENTERPRISE SECURITY OVERVIEW</h1>
   <Router>  
       
     <Fragment>
     
     <div className="wrapper">
    
      <Graph />
     </div>

     <div className="mycontent">
     <div className="manage">
     <h3>Vulnerabilities Management</h3>
     </div>
     <div className="mythreats">
     <h3>Threats</h3>
     </div>
      </div>

      <div className="wrapper-content">
      <BarGraph /> 
       <PieGraph /> 
       </div>

       <div className="mycontent">
     <div className="manage">
     <h3>Service Availability</h3>
     </div>
     <div className="mythreats">
     <h3>Response Time (ms)</h3>
     </div>
      </div>

       <div className="wrapper-content">
       <LineDashedChart />
       <DotlineChart />
       </div>

       <div className="mycontent">
     <div className="manage">
     <h3 style={{
      paddingLeft: 50,
     }}>Security</h3>
     </div>
     <div className="mythreats">
     <h3>Throughput</h3>
     </div>
      </div>

       <div className="wrapper-content">
       <ComposedChart />
       <Dashedchart />
      </div>

     </Fragment>  
   </Router>
   </div>
  );
}

export default App;
