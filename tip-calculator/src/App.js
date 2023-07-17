import { useState } from "react";
import "./index.css";

// const opt =["Dissatisfied(0%)"]

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {

  const [bill, setBill] = useState();
  const [service1, setService1] = useState(0);
  const [service2, setService2] = useState(0);
  
  // const [calculate, setCalculate] = useState({
  //   bill:"",
  //   percentage1:"",
  //   percentage2:""
  // })

  const tip = (service1+service2)/2;

  function resetAll(){
    setBill('');
    setService1(0)
    setService2(0)
  }

  return (
    <div>
      <BillInput bill={bill} onBill={setBill} />
      <SelectPercentage text={"How much was the bill?"} service={service1} onService={setService1} />
      <SelectPercentage text={"How did your friend like the service?"} service={service2} onService={setService2} />
      <Output bill={bill} tip={tip}/>
      <Reset onReset={resetAll} />
    </div>
  );
}

function BillInput({bill, onBill}) {
  

  return (
    <div>
      <span>How much was the bill?</span>
      <input
        type="text"
        value={bill}
        onChange={(e) => onBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ text, service, onService }) {

  return (
    <div>
      <span>{text}</span>
      <select value={service} onChange={(e) => onService(Number(e.target.value))}>
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">It was okay(5%)</option>
        <option value="10">It was good(10%)</option>
        <option value="20">Absolutely amazing!(20%)</option>
      </select>
    </div>
  );
}


function Output({bill,tip,}) {
  return <h4>{`You pay $${bill+tip} ( $${bill} + $${tip})`}</h4>;
}

function Reset({onReset}) {
  return <button onClick={onReset}>Reset</button>;
}
