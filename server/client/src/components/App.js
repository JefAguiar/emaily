import React, { Component } from 'react';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }
  render(){
    return (
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard}/>
            <Route path="/surveys/new" component={withRouter(SurveyNew)} />
            <Route />
          </div>
        </BrowserRouter>
    );
  }
};

export default connect(null, { fetchUser })(App);