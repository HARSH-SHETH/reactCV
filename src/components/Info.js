
function Info(props){
  let info = props.currentState.info;
  let edit = props.currentState.edit;
    if(!edit){
      return(
        <ul>
          {Object.keys(info).map(key => {
            if(info[key])
              return <li>{key}: {info[key]}</li>
          })}
        </ul>
      );
    }else{
      return(
        <form>
        {Object.keys(info).map(key => {
          return <input 
                  type="text" 
                  defaultValue={info[key]} 
                  placeholder={"Enter your " + key}
                  onChange={props.handleChange}
                  data-role={key}
                 />
        })}
        </form>
      );
    }
}

export default Info;
