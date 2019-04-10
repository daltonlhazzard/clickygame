import React, { Component } from "react";
import ActorCard from "./components/actorCard";
import Wrapper from "./components/Wrapper";

import Header from "./components/Header";
import actors from "./actors.json";

class App extends Component {

 state = {
   actors,
   clickedActors: [],
   points: 0,
   gameover: ''
 };


 endGame = () => {
   if (this.state.points < 11) {
     console.log('You Lose');
     this.state.points = 0;
     this.state.clickedActors = [];
     alert('You Lose! Try Again?');
   }
   else {
     console.log('You Win');
     this.state.points = 0;
     this.state.clickedActors = [];
     alert('You Win! Try Again?');
   }
 }


 clickactors = id => {

   if (this.state.points < 11) {
     if (this.state.clickedActors.includes(id)) {
       this.endGame();
     }
     else {
       this.state.points++;
       this.state.clickedActors.push(id);
       for (let i = 0; i < actors.length; i++) {
         let j = Math.floor(Math.random() * (i + 1));
         [actors[i], actors[j]] = [actors[j], actors[i]];
       }
     }
   }
   else {
     this.endGame();
   }



   this.setState({ actors });

 };




 render() {
   return (
     <div><Header>{this.state.points}</Header>
       <Wrapper>
         {this.state.actors.map(actor => (
           <ActorCard
             clickactors={this.clickactors}
             id={actor.id}
             key={actor.id}
             image={actor.image}
           />
         ))}
       </Wrapper>
     </div>
   );
 }
}

export default App;