import { useState } from 'react'

import Landing from './components/Landing'
import Sidebar from './components/Sidebar'

function App() {
  const [spinner, setSpinner] = useState(true)

  setTimeout(() => {
    setSpinner(false)
  }, 1000)

  return (
    <div className='bg-gray-900 text-gray-50 font-mono'>
      {spinner && (
        <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center'>
          <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500'></div>
        </div>
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
