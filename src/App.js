import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
 
  
  return (
    <div className="App">
       <DisplyBlog></DisplyBlog>
       <BatteryDown></BatteryDown>
    </div>
  );
}

function BatteryDown(){
  const [down, setBattery] = useState(100)
  const Batterydown = () =>{
    if(down > 0){
       const newBattery = down - 10;
      setBattery(newBattery)
    }
  }

  return (
    <div>
      <h2>{down}</h2>
      <button onClick={Batterydown}>BatteryDown</button>
    </div>
  );
}

function DisplyBlog(){
  const [picture, myPicture] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => myPicture(data))
  },[])

  
  return (
    <div >
        {/* {
         picture.map(pic => <Blog  title={pic.title} completed={pic.completed}></Blog>)
        } */}
       
    </div>
  );
}

function Blog(props){
  
  return (
    <div>
      <h1>title{props.title}</h1>
      <h2>Completed:{props.completed}</h2>

      
      
    </div>
  );
}

export default App;
