import Head from "./components/Head";
import Content from "./components/Content";
import Foot from "./components/Foot";
import { useState } from "react";

function App() {

  const [ipValue, setipValue]=useState('');

  function getValue(x){
    let y=x;
    console.log("Inside App ",y);
    setipValue(y);
 }
 
  return (
    <div className="App">
      <Head getVal={getValue}/>
      <Content search={ipValue}/>
      <Foot/>
    </div>
  );
}
export default App;
