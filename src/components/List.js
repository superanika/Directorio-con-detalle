import React from 'react';
import {Link} from 'react-router-dom';

class List extends React.Component {
    render() {
        return (
            <ul>
            {this.props.data.map( (item, index) =>
              <li key={index}> 
                <Link to={`/child/${item.login.uuid}`}>Pincha aqui</Link>
                <div className="card_container">
                  <img src={item.picture.medium} alt={item.name.first}/>
                  <h2 className="card_name">Nombre: {item.name.first} {item.name.last}</h2>
                  <h3 className="card_city">Ciudad: {item.location.city}</h3>
                  <h4 className="card_age">Edad: {item.dob.age}</h4>
                </div>
              </li>
              )}
          </ul>
        );
    }
}

export default List;