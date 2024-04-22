import { Suspense } from 'react'
import { Footer } from '../widgets/Footer/Footer'
import { AppRouter } from './providers/router'

function App() {
  return (
    <div className="app">
      <Suspense fallback=" ">
        <AppRouter />
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
