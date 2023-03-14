import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  //handler goes here

  render() {
    return (
      <div>
        <p>Greetings!</p>
        <p>Button goes here</p>
        <button class = "button1"> Click Me!</button>
      </div>
    );
  }
}
