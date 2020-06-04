import React from 'react';
import ReactDOM from 'react-dom';
import Content from './Components/Content';
import './index.css'

class App extends React.Component {
  state = {
      fights: {
        first: 'Fulmination',
        second: 'Furor',
        third: 'Iconoclasm',
        fourth: 'Refulgence'
      },
      loot: [{
        week: 1,
        first: {
          fight: 'Fulmination',
          acc1: { gear: 'Necklace', wonBy: 'Galatea Grin' },
          acc2: { gear: 'Belt', wonBy: 'Elia Aximand' },
          acc3: { gear: 'Ring', wonBy: 'Spencer Ballard' }
        },
        second: {
          fight: 'Furor',
          gear1: { gear: 'Gloves', wonBy: 'Robit Beepbop' },
          gear2: { gear: 'Boots', wonBy: 'Lena Reierson' },
          tomestone: 'Epical Cataclysm',
          glaze: 'Kiwi Bubbletea'
        },
        third: {
          fight: 'Iconoclasm',
          gear1: { gear: 'Pants', wonBy: 'Taiga Mio' },
          gear2: { gear: 'Boots', wonBy: 'Galatea Grin' },
          ester: 'Epical Cataclysm',
          twine: 'Taiga Mio'
        },
        fourth: {
          fight: 'Refulgence',
          weapon: { job: 'DNC', wonBy: 'Kiwi Bubbletea' },
          weaponCoffer: 'Galatea Grin',
          chest: ''
        }
      }],
      weeks: 1,
      staticName: 'Tentacle Difficulties',
      display: null
  };


  render () {
    return (
      <div className="ui center aligned container main-contain">
        <div>
          <h1 className="ui grey inverted header">
          FFXIV Static Gear Tracker
          <div className="sub header"><em>{this.state.staticName}</em></div>
          </h1>
          
        </div>
        <div className="navigation">
          <p className="nav-item" onClick={() => this.setState(({ display: 'weeks' }))}>Weeks</p>
          <p className="nav-item">+Loot</p>
        </div>
        <hr className="nav-break" />
        <div>
          <Content content={this.state}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);