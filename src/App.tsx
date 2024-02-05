import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const increment = () => setCount((count) => count + 1)
  const decrement = () => setCount((count) => count - 1)
  return (
    <>
      <h1>This is a microfrontend</h1>
      <p>Count: {count} </p>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </>
  )
}

export default App
