import React from 'react';
import { useState } from 'react';
import Clock, { ClockToggle } from './components/Clock';
import Folder from './components/Folder';
import Weather from './components/Weather';
import Autocomplete from './components/Autocomplete';

const names = [
  'Abba',
  'Barbara',
  'Barney',
  'Jeff',
  'Jenny',
  'Sally',
  'Sarah',
  'Xander'
];

const folders = [
  { title: 'one', content: 'I am the first' },
  { title: 'two', content: 'Second folder here' },
  { title: 'three', content: 'Third folder here' }
];

/* class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showClock: true
    };
  }

  toggleClock = () => this.setState({ showClock: !this.state.showClock });

  render () {
    return (
      <div className="widgets">
        <Folder folders={folders} />
        <Weather />
        <ClockToggle toggleClock={this.toggleClock} />
        {this.state.showClock && <Clock />}
        <Autocomplete names={names} />
      </div>
    );
  }
}

*/

//Refactored from class component to functional component.
function App() {
  const [showClock, toggleClock] = useState(true);
  return (
    <div className="widgets">
        <Folder folders={folders} />
        <Weather />
        <ClockToggle toggleClock={() => toggleClock(!showClock)} />
        {showClock && <Clock />}
        <Autocomplete names={names} />
      </div>
  )
}

export default App;
