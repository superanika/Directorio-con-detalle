import React from 'react';

class Child extends React.Component {
    render() {
        return (
            <div>

            {this.props.data.map( (item, index) => {

                if(this.props.match.params.id === item.login.uuid) {
                    return (
                        <div key={index}>
                            <img src={item.picture.medium} alt={item.name.first}/>
                            <h2 className="card_name">Nombre: {item.name.first} {item.name.last}</h2>
                            <h3 className="card_city">Ciudad: {item.location.city}</h3>
                            <h4 className="card_age">Edad: {item.dob.age}</h4>
                        </div>
                    );
                } else {
                    return null;
                }
            }
              )}
          </div>
        );
    }
}

export default Child;