import { memo } from 'react'
import { classNames } from '../../../shared/lib/classNames/classNames'
import { HeroCatCard } from '../../../shared/ui/HeroCatCard/HeroCatCard'
import { HomeSlider } from '../../../widgets/HomeSlider/HomeSlider'
import cls from './MainPage.module.scss'

interface MainPageProps {
  className?: string
}

const MainPage = ({ className }: MainPageProps) => {
  return (
    <div className={classNames(cls.MainPage, {}, [className])}>
      <section className={cls.hero}>
        <div className={cls.content}>
          <h3 className={cls.head}>Our mission</h3>
          <p className={cls.mission}>
            Discover a collection of heartwarming NFTs showcasing the resilience
            of remarkable cats. From overcoming adversity to embracing second
            chances, each artwork captures the indomitable spirit of these
            feline companions. By acquiring these NFTs, you not only add
            captivating art to your collection but also support initiatives to
            aid animals in need. Join us in celebrating the strength and
            resilience of these extraordinary beings through digital
            storytelling
          </p>
        </div>
      </section>
      <section className="container">
        <HeroCatCard />
      </section>

      {/* <HomeSlider /> */}
    </div>
  )
}
export default memo(MainPage)
