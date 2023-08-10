import { useEffect, useState } from "react";
import "./index.css";

// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

export default function App() {
  const [currency, setCurrency] = useState('');
  const [curCurrency, setCurCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [converted, setConverted] = useState()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(
    function () {
      async function fetchData() {
        setIsLoading(true)
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${currency}&from=${curCurrency}&to=${toCurrency}`
        );
        const data = await res.json()
        setConverted(data.rates[toCurrency])
        setIsLoading(false)
      }
      if(curCurrency===toCurrency) return setConverted(currency)
      fetchData();
    },
    [currency, curCurrency, toCurrency]
  );

  return (
    <div>
      <input
        type="text"
        value={currency}
        onChange={(e) => setCurrency (Number(e.target.value))}
        disabled={isLoading}
      />
      <select
        value={curCurrency}
        onChange={(e) => setCurCurrency(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{converted}</p>
    </div>
  );
}
