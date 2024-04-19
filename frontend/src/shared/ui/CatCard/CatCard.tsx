import { classNames } from '../../lib/classNames/classNames'
import cls from './CatCard.module.scss'

interface CatCardProps {
  className?: string
  cat?: any
}

export const CatCard = ({ cat, className }: CatCardProps) => {
  return (
    <div className={classNames(cls.CatCard, {}, [className])}>
      {/* <h2>{cat.name}</h2> */}
      <img
        src={import.meta.env.VITE_API_URL + 'images/' + cat.image}
        alt="cat"
      />
    </div>
  )
}
