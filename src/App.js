import React, { Fragment } from 'react';
import Graph from './graph';
import BarGraph from './bargraph';
import PieGraph from './piechart';
import ComposedChart from './ComposedChart';
import { BrowserRouter as Router } from 'react-router-dom';
//import './App.css';

function App() {
  return (
   <Router>
     <Fragment>
       <Graph />
       <BarGraph />
       {/* <PieGraph /> */}
       <ComposedChart />
     </Fragment>  
   </Router>
  );
}

export default App;
