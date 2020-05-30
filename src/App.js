import React, { Component } from 'react';
import './css/app.css';
import axios from 'axios';
import Characters from './components/Characters';
import CharacterDetails from './components/CharacterDetails';
import CreateCharacter from './components/CreateCharacter';
import Header from './components/Header';
import { Route } from 'react-router-dom'

export default class App extends Component {
  state = {
    characters: [],
    showHeader: true,
    page: 1,
    bgColor:'white'
  }


  componentDidMount = async () => {
    this.getCharacters()
  }

  getCharacters = async () => {
    const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${this.state.page}`)
    this.setState(prevState=>({
      characters: [...prevState.characters, ...response.data.results],
      page: prevState.page+1
    }))
  }

  headerToggle = () => {
    this.setState(prevState =>({
      showHeader: !prevState.showHeader
    }))
  }

  addNewCharacter = (e, newCharacter) => {
    e.preventDefault()
    this.setState(prevState => ({
      characters: [...prevState.characters, newCharacter]
    }))
  }

  darkMode = () => {
    if (this.state.bgColor =='white') {
      this.setState({
        bgColor: 'black'
      })
    } else {
      this.setState({
        bgColor: 'white'
      })
    }
  }

  render() {
    return (
      <div className='app' style={{ backgroundColor: this.state.bgColor }}>
        
        {this.state.bgColor == 'white' ? <button onClick={this.darkMode}>Dark Mode</button> : <button onClick={this.darkMode}>Light Mode</button>}
        
        <button onClick={this.headerToggle}>Hide Header</button>
        {this.state.showHeader && <Header />}

        <Route path='/character/:characterName'>
          <CharacterDetails
            charactersArray={this.state.characters}
          />
        </Route>
        <Route path='/' exact>
          <Characters
            charactersArray={this.state.characters}
            getCharacters={this.getCharacters}
          />
        </Route>
        <Route path='/create'>
          <CreateCharacter
            addNewCharacter={this.addNewCharacter}
          />
        </Route>
      </div>
    )
  }
}
