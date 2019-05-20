import React from 'react';
import './App.css';
import Child from './components/Child';
import {Link, Route, Switch} from 'react-router-dom';

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
        <ul>
          {this.state.data.map( (item, index) =>
            <li key= {index} id= {index}> <Link to='/child/id'>Pincha aqui</Link>
              <div className="card_container">
              <img src={item.picture.medium} alt={item.name.first}/>
              <h2 className="card_name">Nombre: {item.name.first} {item.name.last}</h2>
              <h3 className="card_city">Ciudad: {item.location.city}</h3>
              <h4 className="card_age">Edad: {item.dob.age}</h4>
              </div>
            </li>)}
        </ul>
          <Switch>
            <Route path='/child/:id' render={ props => <Child match={props.match} data={this.state.data}/> } />
          </Switch>
      </div>
    );
  }
}

export default App;
