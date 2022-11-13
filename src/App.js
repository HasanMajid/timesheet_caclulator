import { useState, useEffect, useRef } from "react";

const App = () => {
  const [count, setCount] = useState(55);
  const minutes = useRef(0);

  function countUp() {
    setTimeout(increment, 1000);
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

  return (
    <div style={{display:'flex', flexDirection:'row', marginLeft: 300, marginRight: 300 }}>

      <div style={styles.div}>
        <div>Hello World!!</div>
        <div style={{ fontSize: 30, color: "lightcoral", fontWeight: "bold" }}>
          {count}
        </div>
        <div>{minutes.current} minutes have passed</div>
      </div>

      {/* <div style={styles.div}>
        <div>Hello World!!</div>
        <div style={{ fontSize: 30, color: "lightcoral", fontWeight: "bold" }}>
          {count}
        </div>
        <div>{minutes.current} minutes have passed</div>
      </div> */}

    </div>
  );
};

const styles = {
  div: {
    display: "flex",
    backgroundColor: "blue",
    color: "white",
    width: 200,
    height: 200,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    margin: "auto",
    flexDirection: "column",
  },
};

export default App;
