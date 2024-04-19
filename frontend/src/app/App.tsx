import { Suspense } from 'react'
import { AppRouter } from './providers/router'

function App() {
  return (
    <div className="app">
      <Suspense fallback=" ">
        <AppRouter />
      </Suspense>
    </div>
  )
}

export default App
