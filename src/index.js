import React from 'react';
import ReactDOM from 'react-dom';
import Content from './Content';
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
          acc1: { gear: 'Necklace', wonBy: 'Galatea Grin' },
          acc2: { gear: 'Belt', wonBy: 'Elia Aximand' },
          acc3: { gear: 'Ring', wonBy: 'Spencer Ballard' }
        },
        second: {
          gear1: { gear: 'Gloves', wonBy: 'Robit Beepbop' },
          gear2: { gear: 'Boots', wonBy: 'Lena Reierson' },
          tomestone: 'Epical Cataclysm',
          glaze: 'Kiwi Bubbletea'
        },
        third: {
          gear1: { gear: 'Pants', wonBy: 'Taiga Mio' },
          gear2: { gear: 'Boots', wonBy: 'Galatea Grin' },
          ester: 'Epical Cataclysm',
          twine: 'Taiga Mio'
        },
        fourth: {
          weapon: { job: 'DNC', wonBy: 'Kiwi Bubbletea' },
          weaponCoffer: 'Galatea Grin',
          chest: ''
        }
      }]
  };


  render () {
    return (
      <div className="ui center aligned container main-contain">
        <div>
          <h1 className="ui grey inverted header">
          Static Gear Tracker
          <div className="sub header">Tentacle Difficulties</div>
          </h1>
          
        </div>
        <div className="navigation">
          <p className="nav-item">Weeks</p>
          <p className="nav-item">Gear</p>
        </div>
        <hr className="nav-break" />
        <Content toBeDisplayed={this.state.loot.length} loot={this.state.loot} />
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