import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [cats, setCats] = useState<any[]>([])
  const [img, setImg] = useState<any>(null)
  const [nft, setNft] = useState<any>(null)

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + 'api/cats')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setCats(data)
      })
  }, [])

  const sendFile = useCallback(async () => {
    try {
      const data = new FormData()
      data.append('nft', img)

      await axios
        .post(import.meta.env.VITE_API_URL + 'api/upload', data, {
          headers: {
            'content-type': 'multipart/form-data',
          },
        })
        .then((res) => setNft(res.data.path))
    } catch (error) {}
  }, [img])

  const getImage = (evt: any) => {
    if (!evt.target || !evt.target.files) return

    setImg(evt.target.files[0])
  }

  return (
    <>
      <img
        style={{ width: '100px', height: '100px' }}
        src={
          import.meta.env.VITE_API_URL + 'images/nft-1713526772398-pirat.jpg'
        }
        alt=""
      />
      {cats.map((cat) => (
        <h2 key={cat._id}>{cat?.name}</h2>
      ))}
      <img src={import.meta.env.VITE_API_URL + nft} alt="nft" />

      <input type="file" onChange={getImage} />
      <button onClick={sendFile}>Загрузить NFT</button>
    </>
  )
}

export default App
