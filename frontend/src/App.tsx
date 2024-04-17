import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [cats, setCats] = useState<any[]>([])

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + 'api/cats')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setCats(data)
      })
  }, [])

  return (
    <>
      {cats.map((cat) => (
        <h2 key={cat._id}>{cat?.name}</h2>
      ))}
    </>
  )
}

export default App
