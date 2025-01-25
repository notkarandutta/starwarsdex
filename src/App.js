import logo from './icon1.png';
import './App.css';
import React from 'react';

class StarWar extends React.Component
  {
     constructor()
      {
        super()
        this.state=
          {
            name:null,
            height:null,
            homeworld:null,
            photo:null,
            load: false,
            
          }
      }
      
      newChar()
          {
            let ran=Math.ceil(Math.random()*87);
            
            const url= `https://raw.githubusercontent.com/akabab/starwars-api/master/api/id/${ran}.json`
            fetch(url)
            .then (response => response.json())
            .then (data =>{ this.setState({
              name: data.name,
              height: data.height || '?',
              homeworld: data.homeworld || "Unknown",
              photo: data.image,
              load: true
              
            })}) 
               
          }
      render()
        {
          return(
                <div>
                    <h1> Welcome to Starwars-Dex</h1>
                      {
                        this.state.load && 
                        <div>
                            <img src={this.state.photo} alt="img.jpeg" className='photoo'></img>
                            <p>Name -&gt; {this.state.name}</p>
                            <p>Height -&gt; {this.state.height} m</p>
                            <p>Homeworld -&gt; {this.state.homeworld}</p>
                        </div>
                      }
                    <button type="button" className='btn' onClick={()=>this.newChar()}>RANDOMIZE BABY!!!</button>
                </div> )
        }
  }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <StarWar/>
      </header>
    </div>
  );
}

export default App;
