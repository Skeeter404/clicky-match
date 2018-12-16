import React, { Component } from 'react';
import Header from "./components/head/Head";
// import Card from "./components/CharCard/Card";
// import cards from "./cards.json";

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

// const characters = cards.sort(() => 0.5 - Math.random());

// state = {
//   characters,
//   clicked: false,
//   correct: 0
// };

// shuffleCards = () => {
//   const characters = cards.sort(() => 0.5 - Math.random());
//   this.setState({characters: characters});
// };

// handleClick = (event) => {
//   event.preventDefault();
  
//   if(this.state.clicked === false){
//   this.setState({
//     correct: this.state.correct + 1,
//     clicked: true
//   });
// } else {
//   this.setState({
//     correct: 0,
//     clicked: false
//   });
//   this.shuffleCards();
// };
// };

class App extends Component {

  render() {
    return (
      
      <div style={styles.body} className="App">
      <Header />
      <p className="text alight: center">Click on an image to increase your score! Don't click on any image more than once, in order to win!</p>
      <container>

      </container>
      </div>
      
    );
  }
}

export default App;
