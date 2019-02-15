import React, { Component } from 'react';
import './App.css';
import CharactersList from './components/CharacterList';
import Pagination from './components/Pagination';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      charsCount: null,
      nextUrl: null,
      prevUrl: null
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          starwarsChars: data.results,
          nextUrl: data.next,
          prevUrl: data.previous,
          charsCount: data.count
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  handlePageChange = dataSrc => {
    this.getCharacters(dataSrc);
  };

  render() {
    const { starwarsChars, nextUrl, prevUrl, charsCount } = this.state;
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <h2 className="characters-count">{charsCount} characters</h2>
        <Pagination next={nextUrl} prev={prevUrl} onPageChange={this.handlePageChange} />
        <CharactersList characters={starwarsChars} />
        <Pagination next={nextUrl} prev={prevUrl} onPageChange={this.handlePageChange} />
      </div>
    );
  }
}

export default App;
