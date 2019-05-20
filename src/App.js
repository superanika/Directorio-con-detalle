import React from 'react';
import './App.css';
import Child from './components/Child';
import List from './components/List';
import {Route, Switch} from 'react-router-dom';

class App extends  React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount () {
    this.fetchReasons();
  }

 fetchReasons = () => fetch('https://randomuser.me/api/?results=50')
 .then(response => response.json())
 .then(data => {this.setState({
   data: data.results
 })})

  render() {

    return (
      <div className="App">
        <h1 className="title">LinkeDon</h1>
        <Switch>
          <Route exact path='/' render={() =>
            <List data={this.state.data} />
          }/>
          <Route path='/child/:id' render={(routerProps) => 
            <Child match={routerProps.match} data={this.state.data} />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
