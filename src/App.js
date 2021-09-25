import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
      BrowserRouter as Router,
      Switch,
      Route,
      link
} from "react-router-dom"


function App() {

const [mode, setMode] = useState("light");   // for changing the mode of the page 
const [alert, setAlert] = useState(null);

const showAlert = (message,type)=>{
      setAlert({
            msg: message,
            type: type
          })
          setTimeout(() => {
            setAlert(null);    
          }, 2000);
}


 let toggleMode= ()=> {
      if(mode === "light"){
      setMode("dark");
      document.body.style.background="grey";
      showAlert("Dark mode has been enabled ", "success")
      document.title = "hellow -Dark mode"
      
}
else{
      setMode("light");
      document.body.style.background="white";
      showAlert("light mode has been enabled ", "success")
      document.title = "hellow -Dark mode"
}}
  return (
 <>
 <Router>
          <Navbar title="hellow" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert}/>
         <div className="container">
         <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <Textform heading="Text dallo" mode={mode} />
          </Route>
        </Switch>
        </div> 
        </Router>
</>
      )
}

      export default App;
