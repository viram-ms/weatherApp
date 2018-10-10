import React, { Component } from 'react';

class Weather extends Component{
  render(){
    return(
      <div className="weather__info">
    {
      this.props.temperature &&
      <p className="weather__key"> TEMPERATURE: <span className="weather__value">{this.props.temperature} </span></p>
     }
      {this.props.city && this.props.country && <p className="weather__key">LOCATION: <span className="weather__value">{this.props.city},{this.props.country}</span></p>}



      {this.props.humidity && <p className="weather__key">HUMIDITY:<span className="weather__value"> {this.props.humidity}</span></p>}

        {this.props.description && <p className="weather__key">DESCRIPTION:<span className="weather__value"> {this.props.description}</span></p>}
        {this.props.error && <p className="weather__key"><span className="weather__value">{this.props.error}</span></p>}
      </div>
    )
  }
}
 export default Weather;
