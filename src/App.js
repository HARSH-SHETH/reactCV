import {Component} from 'react';

import Header from './components/Header.js';
import General from './components/General.js';
// import './styles/Header.css'

class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <>
        <Header title="CV Application" />
        <main>
          <General />
          {/* <Education /> */}
          {/* <Experience /> */}
        </main>
      </>
    );
  }
}

export default App;
