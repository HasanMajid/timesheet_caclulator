import { useState } from "react";
import { IconContext } from "react-icons";
import { AiOutlinePause } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import {FaBalanceScale, FaPlay} from 'react-icons/fa';

const Pause = ({clickHandler}) => {
  const [paused, setpaused] = useState(false);
  const [pressedDown, setPressedDown] = useState(false);
  const [hover, setHover] = useState(false);
  const styles = {
    button:{
      flex: 1,
      opacity: pressedDown ? 0.45 : 1,
      cursor: "pointer",
      backgroundColor: "darksalmon",
      borderRadius: 200,
      boxShadow: hover ? "1px 3px 12px #9E9E9E" : "",
      alignItems:'center',
      justifyContent: 'center',
      margin:'auto',
      userSelect: 'none'
    }
  }

  return (
    <div
     style={styles.button}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
        setPressedDown(false);
        }}
      onMouseDown={() => {
        setPressedDown(true);
      }}
      onMouseUp={() => {
        clickHandler()
        setPressedDown(false);
        setpaused(!paused);
      }}
    >
      <IconContext.Provider value={{ color: "green", size:130}} >
        {paused ? <AiOutlinePause /> : <BsFillPlayFill style={{paddingLeft:8}} />}
      </IconContext.Provider>
    </div>
  );

};



export default Pause;
