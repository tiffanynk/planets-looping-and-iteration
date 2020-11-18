import { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    planets: [{
      id: 1,
      distanceFromEarth: 300,
      name: 'Mercury'
    },{
      id: 2,
      distanceFromEarth: 100,
      name: 'Venus',
    },{
      id: 3,
      distanceFromEarth: 0,
      name: 'Earth',
    },{
      id: 4,
      distanceFromEarth: 100,
      name: 'Mars',
    },{
      id: 5,
      distanceFromEarth: 500,
      name: 'Jupiter',
      hasRings: true,
    },{
      id: 6,
      distanceFromEarth: 700,
      name: 'Saturn',
      hasRings: true,
    },{
      id: 7,
      distanceFromEarth: 900,
      name: 'Uranus',
      hasRings: true,
    },{
      id: 8,
      distanceFromEarth: 1200,
      name: 'Neptune',
    }]
  }

  planets = this.state.planets.map(planetToListItem)

  //iterables take function definitions as their arguments, isPlanetCloserThan returns a function definition

  closePlanets = this.state.planets
    .filter(isPlanetCloserThan(900))
    .map(planetToListItem)
  
  render(){
    return (
    <div className="App">
      <h1>The Planets</h1>
        <ul className='planets'>
          {this.planets}
        </ul>
      <h2>Close Planets</h2>
      <ul className='close-planets'>
        {this.closePlanets}
      </ul>
    </div>
  );}
}

//functional programming refactor:
const isPlanetCloserThan = distance => planet => planet.distanceFromEarth < distance 

//most common way to write this refactor:
// function isPlanetCloserThan(distance){
//   return planet => planet.distanceFromEarth < distance
// }

//enclosure - function enclosed by function
// isPlanetCloserThan(distance){
//   return function isPlanetClose(planet){
//     return planet.distanceFromEarth < distance
//   }
// }

function planetToListItem(planet){
  return planet.hasRings 
    ? <li>{planet.name}</li> 
    : <li>🌍 {planet.name}</li>
}

export default App;
