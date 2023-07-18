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
  // const [bill, setBill] = useState();
  // const [service1, setService1] = useState(0);
  // const [service2, setService2] = useState(0);

  const [calculate, setCalculate] = useState({
    bill: "",
    service1: 0,
    service2: 0,
  });

  const tip = (calculate.service1 + calculate.service2) / 2;

  function resetAll() {
    setCalculate({
      bill: "",
      service1: 0,
      service2: 0,
    })
  }


  function handleBillChange(e){
    setCalculate({
      ...calculate,bill:Number(e.target.value)
    })
  }
  function handleService1(e){
    setCalculate({
      ...calculate, service1:Number(e.target.value)
    })
  }
  function handleService2(e){
    setCalculate({
      ...calculate, service2:Number(e.target.value)
    })
  }

  

  return (
    <div>
      <BillInput bill={calculate.bill} onBill={handleBillChange} />
      <SelectPercentage
        text={"How much was the bill?"}
        service={calculate.service1}
        onService={handleService1}
      />
      <SelectPercentage
        text={"How did your friend like the service?"}
        service={calculate.service2}
        onService={handleService2}
      />
      <Output bill={calculate.bill} tip={tip} />
      <Reset onReset={resetAll} />
    </div>
  );
}

function BillInput({ bill, onBill }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <input
        type="text"
        value={bill}
        onChange={onBill}
      />
    </div>
  );
}

function SelectPercentage({ text, service, onService }) {
  return (
    <div>
      <span>{text}</span>
      <select
        value={service}
        onChange={onService}
      >
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">It was okay(5%)</option>
        <option value="10">It was good(10%)</option>
        <option value="20">Absolutely amazing!(20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return <h4>{`You pay $${bill + tip} ( $${bill} + $${tip})`}</h4>;
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
