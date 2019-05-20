import React from 'react';

class Child extends React.Component {
    render() {
        return (
            <div className="card_container">
            {this.props.data.map(item => {
                
                <img src={item.picture.medium} alt={item.name.first} />
                <h2 className="card_name"> Nombre: {item.name.first} {item.name.last} </h2>
                <h3 className="card_city">Ciudad: {item.location.city}</h3>
                <h4 className="card_age">Edad: {item.dob.age}</h4>
            })}
              </div>
        );
    }
}

export default Child;