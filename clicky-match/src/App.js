import React, { Component } from 'react';
import Header from "./components/head/Head";
import Card from "./components/CharCard/Card";
import cards from "./cards.json";

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
const characters = cards;





class App extends Component {

  state = {
    characters,
    currentScore: 0,
    highScore: 0
  };

  shuffleCards = () => {
    const shuffleArray = (array) => {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array
    }
    var shuffledArray = shuffleArray(this.state.characters)
    this.setState({ characters: shuffledArray });
  };

  handleClick = (event, id) => {
    event.preventDefault();

    //looop over array of data looking for obj that matches the id of the card clicked
    //if this.state.characters[0].id === id
    //know we found matching card
    //if this.state.characters[0].clicked === false
    //know that is hasn't been clicked yet
    //increment score
    //else
    //reset game
    //reset score

    for (let i = 0; i < this.state.characters.length; i++) {

      if (this.state.characters[i].id === id) {

        if (this.state.characters[i].clicked === false) {

          this.state.characters[i].clicked = true

          this.setState({
            currentScore: this.state.currentScore + 1
          });

          if (this.state.currentScore >= this.state.highScore) {
            this.setState({
              highScore: this.state.highScore + 1
            })
          }
        }
        else {
          //reset game
          this.setState({
            currentScore: 0,
            characters: [
              {
                  id: 1,
                  name: "Arya",
                  clicked: false,
                  image: "/images/Arya.jpg"
              },
              {
                  id: 2,
                  name: "Bran",
                  clicked: false,
                  image: "/images/Bran.png"
              },
              {
                  id: 3,
                  name: "Brienne",
                  clicked: false,
                  image: "/images/Brienne.jpg"
              },
              {
                  id: 4,
                  name: "Bronn",
                  clicked: false,
                  image: "/images/Bronn.jpg"
              },
              {
                  id: 5,
                  name: "Cersei",
                  clicked: false,
                  image: "/images/Cersei.jpg"
              },
              {
                  id: 6,
                  name: "Daenerys",
                  clicked: false,
                  image: "/images/Daenerys.jpg"
              },
              {
                  id: 7,
                  name: "Jaime",
                  clicked: false,
                  image: "/images/Jaime.jpg"
              },
              {
                  id: 8,
                  name: "Mountain",
                  clicked: false,
                  image: "/images/Mountain.jpg"
              },
              {
                  id: 9,
                  name: "Sandor",
                  clicked: false,
                  image: "/images/Sandor.png"
              },
              {
                  id: 10,
                  name: "Sansa",
                  clicked: false,
                  image: "/images/Sansa.jpg"
              },
              {
                  id: 11,
                  name: "Jon",
                  clicked: false,
                  image: "/images/Snow.jpg"
              },
              {
                  id: 12,
                  name: "Tyrion",
                  clicked: false,
                  image: "/images/Tyrion.jpg"
              }
          ]
          });

        }
      }
    }
  }

      //   if (this.state.clicked === false) {
      //     this.setState({
      //       correct: this.state.correct + 1,
      //       clicked: true
      //     });
      //   } else {
      //     this.setState({
      //       correct: 0,
      //       clicked: false
      //     });
      //     this.shuffleCards();
      //   };
      // };

      render() {
        return (

          <div style={styles.body} className="App">
            <Header />
            <p className="text align: center">Click on an image to increase your score! Don't click on any image more than once, in order to win!</p>
            <div>
              Current Score: <span>{this.state.currentScore}</span>
              <br></br>
              High Score: <span>{this.state.highScore}</span>
            </div>
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
