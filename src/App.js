import React, { Fragment } from 'react';
import Graph from './graph';
import BarGraph from './bargraph';
import PieGraph from './piechart';
import ComposedChart from './ComposedChart';
import Dashedchart from './DashedChart';
import LineDashedChart from './LinedashedChart';
import DotlineChart from './DotLineChart';
import { BrowserRouter as Router } from 'react-router-dom';
//import './App.css';

function App() {
  return (
   <Router>   
     <Fragment>
       <Graph />
       <BarGraph />
       {/* <PieGraph /> */}
       <LineDashedChart />
       <DotlineChart />
       <ComposedChart />
       <Dashedchart />
     </Fragment>  
   </Router>
  );
}

export default App;
