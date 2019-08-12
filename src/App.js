import React, { Component } from 'react'
import Titles from './components/Title'
import Form from './components/Form'
import Weather from './components/Weather'
import { async } from 'q';

const API_KEY = '9a4ed9099cc8a0d7eb602ef441b6b47f';

export class App extends Component {
    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;

        // const data =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},uk&appid=${API_KEY}`)
        // .then( res => res.json())
       
         const api_call =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
         const data = await api_call.json(); 
         console.log(data)
        }

    render() {
        return (
            <div>
                <Titles/>
                <Form getWeather = {this.getWeather}/>
                <Weather/>
            </div>
        )
    }
}

export default App
