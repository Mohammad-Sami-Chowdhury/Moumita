import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from '../HomePage/index'
import Scrollbar from '../../components/scrollbar'

      

const AllRoute = () => { 

  return (
    <div className="App">
       <Router>
            <Switch>
              <Route path='/' component={Homepage} />
              <Route path='/home' component={Homepage} />
            </Switch>
            <Scrollbar />
          </Router>
      
    </div>
  );
}

export default AllRoute;
