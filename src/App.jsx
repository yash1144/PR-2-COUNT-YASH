import { useState , useEffect } from 'react'


function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);}

  useEffect(() => {
    const savedCount = localStorage.getItem("counterValue");
    if (savedCount) {
      setCount(parseInt(savedCount, 10));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("counterValue", count);
    console.log("render..." + count);
    
  }, [count]);



  return (
    <>
      <h1>react </h1>
      <div className="card">
        <button onClick={decrement}> -</button>
        {count}
        <button onClick={increment}> +</button>
        
      </div>
    </>
  )
}

export default App
