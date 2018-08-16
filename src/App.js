import React, { Component } from 'react';
import './App.css';
import CryptoInfo from './CryptoInfo';

class App extends Component {
  render () {
    return (
      <section className="App">
      <div className="App-Title-1">Crypto Currency Tracker</div>
      <div className="App-Title-2">Created by Somebody/Somehow/Maybe</div>
      <table>
        <tbody>
          <tr>
            <th>Icon</th>
            <th className='currencyName'>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th className='hourlyChange'>% Change (1hr)</th>
            <th className='dailyChange'>% Change (24h)</th>
          </tr>
          <CryptoInfo />
        </tbody>
      </table>
      </section>
    );
  }
}

export default App;
