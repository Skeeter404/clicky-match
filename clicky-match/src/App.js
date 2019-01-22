import React, { Component } from 'react';
import Header from "./components/head/Head";
import Card from "./components/CharCard/Card";
import cards from "./cards.json";
import "./App.css";

const styles = {
  body: {
    backgroundImage: "url('/images/Walkers.png')",
    fontFamily: "'Fanwood Text', serif",
    minHeight: "100vh",
    margin: 0,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  }
};

const characters = cards.sort(() => 0.5 - Math.random());



class App extends Component {

  state = {
    characters,
    currentScore: 0,
    highScore: 0,
    clicked: []
  };

  shuffleCards = () => {
    const characters = cards.sort(() => 0.5 - Math.random());
    this.setState({ characters: characters });
  };

  updateScore = () => {
    this.setState({ currentScore: this.state.currentScore + 1 });
    const newScore = this.state.currentScore + 1;
    this.shuffleCards();
    if (newScore >= this.state.highScore) {
      this.setState({ highScore: newScore })
    };
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.setState({ clicked: [...this.state.clicked, id] });
      this.updateScore();
    } else {
      this.setState({ currentScore: 0 });
      this.setState({ clicked: [] });
      this.shuffleCards();
    };
  };


      render() {
        return (

          <div style={styles.body} className="App">
            <Header />
            <br></br>
            <h4 className="text align: center">Click on an image to increase your score! Don't click on any image more than once, in order to win!</h4>
            <br></br>
            <div>
              <h4>Current Score: <span>{this.state.currentScore}</span></h4>
              
              <h4>High Score: <span>{this.state.highScore}</span></h4>
            </div>
            <br></br>
            <section>
              <div className="row container-fluid">
                {
                  characters.map((gotObj) => {
                    return (<Card
                      id={gotObj.id}
                      key={gotObj.id}
                      image={gotObj.image}
                      name={gotObj.name}
                      handleClick={this.handleClick} />)
                  })
                }

              </div>
            </section>
          </div>

        );
      }
    }

    export default App;
