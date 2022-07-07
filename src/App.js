import React from 'react';
import axios from 'axios';

import './app.css';

class App extends React.Component {
  state = {
    advice: '',
  }

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;

        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
      <h1 className='head'>Motivation Quote Generator</h1>
      <div className="app">
          <div className="card">
              <h1 className="heading">{this.state.advice}</h1>
              <button className="button" onClick={this.fetchAdvice}>
                <span>Generate Motivation</span>
              </button>
            </div>
      </div>
      <h5>Isaac@webdevelopment</h5>
      </>
    );
  }
}

export default App;