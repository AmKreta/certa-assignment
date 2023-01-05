import { useRef, useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [showResetButton, setShowResetButton] = useState(false);
  const timerRef = useRef(null);

  const onStart = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(function () {
      setCounter((prevState) => prevState + 1);
    }, 1000);
    setShowResetButton(false);
  };

  const onPause = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setShowResetButton(true);
    }
  };

  const onReset = () => {
    setCounter(0);
    setShowResetButton(false);
  };

  return (
    <div>
      <h1>{counter}</h1>
      <div>
        <button onClick={onStart}>start</button>
        <button onClick={onPause}>pause</button>
        {showResetButton ? <button onClick={onReset}>Reset</button> : null}
      </div>
    </div>
  );
}
