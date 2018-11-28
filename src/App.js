import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
      constructor(props) {
        super(props)

            this.state = {
              friends: [],
              picture: '',
              name: ''
            }
      }

  updatePicture(value) {
      this.setState({picture: value});
  } 

  updateName(value) {
    this.setState({name: value});
  }

  updateFriend() {
    const { friends, picture, name } = this.state;
    
    let newFriends = friends.slice();
    newFriends.push({picture, name});

    this.setState({friends: newFriends, picture: '', name: ''});
}
  
  
  render() {
    const friends;
    
    return (
      <div>
        <span>Picture</span>
        <input onChange={( e ) => this.updatePicture(e.target.value)} value={this.state.picture} />

        <span>Name</span>
        <input onChange={( e ) => this.updateName(e.target.value)} value={this.state.name} />

          <button onClick={() => this.updateFriend()} >Add Friend</button>
      </div>
    );
  }
}

export default App;


// Step 7
// In this step, we'll add a way to see our list of friends on the DOM by mapping through the friends array on state.

// Just above the return() statement, in the render method, create a new const variable called friends:
// Map through the friends array on state to render a div element that contains an img and a span element.
// The img element's src property should equal the value of the friend's picture.
// Optionally you can control the maximum width/height by using the width/height propertys on the img element.
// The span element should display the friend's name.
// Be sure to assign a key on the parent div. This is a requirement from React.
// Just below the Add Friend button, use {} to break out of JSX, and render the new friends variable.

// Step 6
// * Underneath the constructor method, create a new method called updatePicture:
// * This method should have one parameter: value.
// * This methoud should call this.setState to update picture with the given value.
// * Underneath the updatePicture method, create a new method called updateName:
// * This method should have one parameter: value.
// * This method should call this.setState to update name with the given value.
// * On the first input element:
// * Add an onChange property that captures the event's value and calls updatePicture with that value.
// * On the second input element:
// * Add an onChange property that captures the event's value and calls updateName with that value.
