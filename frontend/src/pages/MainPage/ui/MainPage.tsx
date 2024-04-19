import { memo, useEffect, useState } from 'react'
import { classNames } from '../../../shared/lib/classNames/classNames'
import { CatCard } from '../../../shared/ui/CatCard/CatCard'
import { Page } from '../../../shared/ui/Page'
import { Slider } from '../../../widgets/Slider/Slider'
import cls from './MainPage.module.scss'

interface MainPageProps {
  className?: string
}

const MainPage = ({ className }: MainPageProps) => {
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
  const cards = cats.map((it) => <CatCard key={it._id} cat={it} />)

  return (
    <Page className={classNames(cls.MainPage, {}, [className])}>
      <Slider items={cards} />
    </Page>
  )
}
export default memo(MainPage)
