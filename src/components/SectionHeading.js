
function SectionHeading(props){
  return(
    <h2>
      {props.title}
      <button onClick={props.handleClick}>
        {props.button}
      </button>
    </h2>
  );
}

export default SectionHeading;
