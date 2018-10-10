import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Components/Title';
import Weather from './Components/Weather';
import Forms from './Components/Forms';

const API_KEY="24055a48a12afbe8fb509e62641c01f8";


class App extends Component {

  state={
    temperature:'',
    city:'',
    country:'',
    description:'',
    humidity:'',
    error:''
  }



  fetchData = async (e) => {
    e.preventDefault();
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${API_KEY}`);
    const data= await api_call.json();
    if(city && country){
      console.log(data);
      this.setState({
        temperature:data.main.temp,
        city:data.name,
        country:data.sys.country,
        description:data.weather[0].description,
        humidity:data.main.humidity,
        error:""
      });

    }
    else{this.setState({
      temperature:'',
      city:'',
      country:'',
      description:'',
      humidity:'',
      error:"please enter data"
    });
}
  }


  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 title-container">
                <Title />
              </div>
              <div className="col-sm-7 form-container">
              <Forms getWeather={this.fetchData} />
              <Weather
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                description={this.state.description}
                humidity={this.state.humidity}
                error={this.state.error}
               />
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
