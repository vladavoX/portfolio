import { useState } from 'react'

import Landing from './components/Landing'
import Sidebar from './components/Sidebar'

function App() {
  const [spinner, setSpinner] = useState(true)

  setTimeout(() => {
    setSpinner(false)
  }, 1000)

  return (
    <div className='bg-gray-900 text-gray-50 font-mono flex items-center justify-center h-screen'>
      {spinner && (
        <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500'></div>
      )}
      {!spinner && (
        <>
          <Sidebar />
          <Landing />
        </>
      )}
    </div>
  )
}

export default App
