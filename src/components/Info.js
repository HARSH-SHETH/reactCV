
function Info(props){
  let info = props.info;
  let edit = props.edit;
    if(!edit){
      return(
        <ul>
          {Object.keys(info).map(key => {
            if(info[key])
              return <li key={key}>{key}: {info[key]}</li>
            return null;
          })}
        </ul>
      );
    }else{
      return(
        <form>
          {Object.keys(info).map(key => {
            return <input 
              key={key}
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
