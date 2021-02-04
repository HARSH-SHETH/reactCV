import {Component} from 'react';

import SectionHeading from './SectionHeading.js';
import Info from './Info.js';

class General extends Component{
  constructor(props){
    super(props);
    this.state = {
      edit: false,
      info: props.info 
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleClick(){

    this.setState(prevState => {
      return {
        edit: !prevState.edit,
      }
    });
  }

  handleChange(e){
    this.setState(prevState => {
      let info = prevState.info;
      let role = e.target.dataset.role;
      info[role] = e.target.value;
      return {
        info: info, 
      }
    });
  }
  render(){
    const { className, title } = this.props;
    return(
      <div className={className}>
        <SectionHeading 
          title={title}
          handleClick={this.handleClick}
          button={(this.state.edit) ? "submit" : "edit"}
        />
        <Info handleChange={this.handleChange} 
                     info={this.state.info} 
                     edit={this.state.edit}
        />
        <hr />
      </div>
    );
  }
}

export default General;
