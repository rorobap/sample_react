import './App.css';
import Card from './components/card/index.js';


function App() {

  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
 console.log(params);
  return (
    <div className="App">
 
 <Card background="#efefef"/>


 {params.options ? <Card background="red" containsQueryString={true} values={params}/> : ''}
 
    </div>
  );
}

export default App;
