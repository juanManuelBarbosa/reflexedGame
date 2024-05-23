import { useState } from 'react'
import { ContainerGame } from './components/ContainerGame'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>hola que ase</h1>
      <ContainerGame/>
    </>
  )
}

export default App
