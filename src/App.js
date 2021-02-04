import {Component} from 'react';

import Header from './components/Header.js';
import General from './components/General.js';

import data from './data.js'
import './styles/Header.css'

class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <>
        <Header title="CV Application" />
        <main>
          <General 
            title="General Information"
            info={data.personal}
            className="section"
          />
          <General 
            title="Educational Background"
            info={data.education}  
            className="section"
          /> 
          <General 
            title="Job Experience"
            info={data.experience}
            className="section"
          />
        </main>
      </>
    );
  }
}

export default App;
