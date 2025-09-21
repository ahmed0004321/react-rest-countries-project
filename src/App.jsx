import './App.css'
import Countries from './components/countries/countries'
import { Suspense } from 'react'

function App() {

  const countriesPromise = fetch('https://openapi.programming-hero.com/api/all').then(res => res.json())


  return (
    <>
    <Suspense fallback={'loading Data....'}>
      <Countries countriesPromise = {countriesPromise}></Countries>
    </Suspense>

    <div>

      <h1>React world on the go...</h1>

    </div>
    </>
  )
}

export default App
