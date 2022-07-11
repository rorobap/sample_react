

function Header(props) {

  const stylesHeader = {
   color:'darkGray'
  };

  return (
    <h1 style={stylesHeader}>{props.text}</h1>
  );
}

export default Header;
