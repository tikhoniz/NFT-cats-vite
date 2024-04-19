import axios from 'axios'
import { memo, useCallback, useState } from 'react'
import { classNames } from '../../../shared/lib/classNames/classNames'
import { Page } from '../../../shared/ui/Page'
import cls from './AdminPage.module.scss'

interface AdminPageProps {
  className?: string
}

const AdminPage = ({ className }: AdminPageProps) => {
  const [img, setImg] = useState<any>(null)
  const [nft, setNft] = useState<any>(null)

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
    <Page className={classNames(cls.MainPage, {}, [className])}>
      <img src={import.meta.env.VITE_API_URL + nft} alt="nft" />
      <input type="file" onChange={getImage} />
      <button onClick={sendFile}>Загрузить NFT</button>
    </Page>
  )
}
export default memo(AdminPage)
