

function Button(props) {

const styledButton = {
  minWidth: '100px',
  maxWidth: '49%',
  backgroundColor: props.background,
  color: props.textColor,
  padding: props.paddings,
  margin: '10px',
  borderRadius: '3px',
  cursor: 'pointer'
};


  return (

    <input type={props.type == 'eraseAll' ? 'reset' : 'submit'} style={styledButton} value={props.text}/>


  );
}

export default Button;
