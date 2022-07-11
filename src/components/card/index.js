import Button from '../button/index.js';
import Header from '../header/index.js';
import SubHeader from '../subHeader/index.js';
import Input from '../input/index.js';



function Card(props) {


  const styledCard = {
    width: '900 px',
    maxWidth: '90%',
    backgroundColor: props.background,
    margin: 'auto',
    marginBottom:'30px',
    marginTop:'30px',
    borderRadius: '6px'
  };
  const minStyle = {
    padding: '10px'
  }
  return (
    <div className="card" style={styledCard}>
 {!props.containsQueryString? 
      <form style={minStyle}> 

   
      <Header text="This is the header"/>

      <SubHeader text="This is the subheader"/>
      
      <Input id="name" name="name" label="Please enter your name" placeholder="Nameplaceholder" inputType="text" />
      <Input id="surName" name="surName" label="Please enter your surname" placeholder="Surnameplaceholder" inputType="text" />
      <Input id="email" name="email" label="Please enter your email" inputType="email" />
      <Input id="age" name="age" label="Please enter your age" inputType="age" />
      <Input id="options" name="options" label="Choose the option" inputType="options" params={['Male','Female']} />
      <Input id="notifications" name="notifications" label="Would you like to receive notifications?" inputType="checkbox" />

      <Button text="Cancel" textColor="white" background="red" paddings="10px 6px" type="eraseAll" />
      <Button text="Ok" textColor="lightyellow" background="green" paddings="10px 6px" type="submit"/>
      
      </form>
    : 
    
    <div style={minStyle}>
      <p>"This URL contains a query string, showing values:"</p>
      <p>Name: {props.values.name}</p>
      <p>Surname: {props.values.surName}</p>
      <p>Email: {props.values.email}</p>
      <p>Age: {props.values.age}</p>
      <p>Options: {props.values.options}</p>
      <p>Notifications: {props.values.notifications}</p>
    
    </div>
    }
    </div>
  );
}

export default Card;
