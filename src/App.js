import './App.css';
import { useState, useEffect } from 'react';
import { useFetch } from './useFetch.js';


function App() {

  // originally: const [count, setCount] = useState(0);
  // after adding localstorage:
  const [count, setCount] = useState(() => {
    return JSON.parse(localStorage.getItem("count")) || 0
  });
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <div>
      <div>{loading ? 'loading...' : data}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount(c => c + 1)}>Increment count</button>
    </div>
  );
}

export default App;
