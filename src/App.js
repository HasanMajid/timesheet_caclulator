import { useState, useEffect, useRef } from "react";

// import {AiOutlinePause, } from 'react-icons/all'
// import { IconContext } from "react-icons";
// import { AiOutlinePause } from "react-icons/ai";

// Component Imports
import Pause from "./components/Pause";
import DescriptionInput from "./components/DescriptionInput";

const App = () => {
  const [count, setCount] = useState(0);
  const minutes = useRef(0);
  const [paused, setPaused] = useState(true)
  const descInput = useRef(<DescriptionInput/>)
  
  function countUp() {
    if (!paused){
      setTimeout(increment, 1000);
    }
  }

  function increment() {
    if (count === 60) {
      minutes.current += 1;
      setCount(1);
    } else {
      setCount(count + 1);
    }
  }

  useEffect(() => {
    countUp();
  });

  function pause(){
        setPaused(!paused)
        console.log('button clicked')
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // marginLeft: 300,
        // marginRight: 300,
        alignItems: "center",
        textAlign: "center",
        // margin: "auto",
        // justifyContent: "center",
      }}
    >
 
      <Pause clickHandler={pause}/>

      <div style={styles.div}>
        {/* <div>Hello World!!</div> */}
          <div style={{ fontSize: 50, color: "lightcoral", fontWeight: "bold" }}>
          00 : {minutes.current} : {count}
          </div>
        <div>{minutes.current} minutes have passed</div>
      </div>

      {descInput.current}

    </div>
  );
};

const styles = {
  div: {
    margin:10,
    flex: 2,
    display: "flex",
    backgroundColor: "blue",
    color: "white",
    width: 340,
    height: 320,
    borderRadius: 100,
    // justifyContent: "center",
    // alignItems: "center",
    // textAlign: "center",
    // margin: "auto",
    flexDirection: "column",
  },
};

export default App;
