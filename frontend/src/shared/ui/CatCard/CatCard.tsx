import { classNames } from '../../lib/classNames/classNames'
import cls from './CatCard.module.scss'

interface CatCardProps {
  className?: string
  cat?: any
}

export const CatCard = ({ cat, className }: CatCardProps) => {
  return (
    <div
      className={classNames(cls.CatCard, {}, [className])}
      style={{
        backgroundImage: `url(${
          import.meta.env.VITE_API_URL + 'images/' + cat.image
        })`,
      }}
    >
      <div className={cls.content}>
        <h3 className={cls.title} data-swiper-parallax="-200">
          {cat.name}
        </h3>
        <p className={cls.caption} data-swiper-parallax="-100">
          {cat.history}
        </p>
      </div>
      <button className={cls.moreBtn}>more</button>
    </div>
  )
}
