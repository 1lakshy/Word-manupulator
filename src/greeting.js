import react from "react";
import  ReactDOM  from "react-dom";

let curDate = new Date();
curDate = curDate.getHours();
let greeting = "";
const cssStyle = { };

if(curDate >= 1 && curDate <12){
    greeting = "Good Morning";
    cssStyle.color = "lightblue"
}else if(curDate>=12 && curDate <19){
    greeting = "Good Afternoon "
    cssStyle.color ="orange"
}else{
    greeting ="Good Night"
    cssStyle.color = "black"
}


ReactDOM.render(
    <h1>Hellow Madam ,<div style={cssStyle}> {greeting} </div></h1>,
    document.getElementById("root")
);