import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from './routes/home/Home'
import Header from './components/Header';
import Detail from './routes/detail/Detail';



function App(props) {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Redirect exact from='/' to='detail' />
        <Route path="/home" render={(route) => (
          <Home { ...props } { ...route }></Home>
        )} />
        <Route path="/detail" component={Detail} />
      </Router>
    </div>
  );
}

export default App;
