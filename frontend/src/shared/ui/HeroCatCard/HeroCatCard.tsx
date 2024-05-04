import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { classNames } from '../../lib/classNames/classNames'
import cls from './HeroCatCard.module.scss'

interface HeroCatCardProps {
  className?: string
  cat?: any
}

export const HeroCatCard = ({ className }: HeroCatCardProps) => {
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
    <div
      className={classNames(cls.HeroCatCard, {}, [className])}
      // style={{
      //   backgroundImage: `url(${
      //     import.meta.env.VITE_API_URL + 'images/' + cats[0].image
      //   })`,
      // }}
    >
      <div className={cls.imageBlock}>
        {cats[0] && (
          <>
            <Link to={'/cat'}>
              <img
                className={cls.image}
                loading="lazy"
                src={`${import.meta.env.VITE_API_URL}images/${cats[0].image}`}
                alt=""
              />
            </Link>
            <div className={cls.price}>
              <p>Price: $1</p>
            </div>
          </>
        )}
      </div>
      <div className={cls.textBlock}>
        {cats[0] && (
          <>
            <h1 className={cls.title}>{cats[0].name}</h1>
            <p className={cls.caption}>{cats[0].history}</p>
          </>
        )}
        <div className={cls.buyBtnBlock}>
          <button>Buy NOW</button>
        </div>
      </div>
    </div>
  )
}
