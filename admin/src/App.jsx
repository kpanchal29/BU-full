import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AdminMain from './AdminMain'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AdminMain/>
    </>
  )
}

export default App
