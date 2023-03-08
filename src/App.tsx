import { useState } from 'react'

import Landing from './components/Landing'
import Sidebar from './components/Sidebar'
import About from './components/About/About'
import Projects from './components/Projects'

function App() {
  const [spinner, setSpinner] = useState(true)

  setTimeout(() => {
    setSpinner(false)
  }, 1000)

  return (
    <div
      className={`bg-gradient-to-br from-gray-900 to-gray-800 text-gray-50 font-mono flex flex-col ${
        spinner ? 'h-screen justify-center items-center' : ''
      } px-48`}
    >
      {spinner && (
        <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500'></div>
      )}
      {!spinner && (
        <>
          <Sidebar />
          <Landing />
          <About />
          <Projects />
        </>
      )}
    </div>
  )
}

export default App
