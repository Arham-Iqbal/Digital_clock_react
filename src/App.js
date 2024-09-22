import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let[clocktime,settime]=useState("")
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      try {
        const x = date.toLocaleTimeString();
        settime(x); 
      } catch (e) {
        console.log("Error is ", e);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []); 
  return (
      <div>
          <h1>Digital clock</h1>
          <h2>{clocktime}</h2>
      </div>
  );
}
export default App;
