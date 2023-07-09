import { useState } from "react";

function handleAdd() {}

function handleSub() {}

export default function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  function handleStepAdd() {
    setStep((s) => s + 1);
  }

  function handleStepSub() {
    setStep((s) => s - 1);
  }
  function handleCountAdd() {
    const add = step;
    setCount(add + count);
  }

  function handleCountSub() {
    const sub = step;
    setCount(count - sub);
  }

  // function dateCount(){
  //   if(count===0)
  //     return "Today is"
  //   else if(count>0)
  //     return `${count} days from today is`
  //   else
  //     return `${-count} days ago was `
  // }
  const date = new Date('June 21 2027');
  date.setDate(date.getDate() + count);
  
  return (
    <>
      <div className="steps">
        <span>
          <button onClick={handleStepSub}>-</button>
        </span>
        <span>Step: {step}</span>
        <span>
          <button onClick={handleStepAdd}>+</button>
        </span>
      </div>
      <div className="count">
        <span>
          <button onClick={handleCountSub}>-</button>
        </span>
        <span>Count: {count}</span>
        <span>
          <button onClick={handleCountAdd}>+</button>
        </span>
      </div>
      <p className="data">
        {count === 0
          ? `Today is ${date.toDateString()}`
          : count > 0
          ? `${count} day from today is ${date.toDateString()}`
          : `${-count} day ago was ${date.toDateString()}`}
      </p>
    </>
  );
}
