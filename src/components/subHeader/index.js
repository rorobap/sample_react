

function SubHeader(props) {

  const stylesSubHeader = {
   color:'gray'
  };

  return (
    <h2 style={stylesSubHeader}>{props.text}</h2>
  );
}

export default SubHeader;
