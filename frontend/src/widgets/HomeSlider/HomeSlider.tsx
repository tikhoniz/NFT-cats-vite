import 'swiper/scss'
import 'swiper/scss/autoplay'
import 'swiper/scss/effect-coverflow'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/parallax'

import { memo, useEffect, useState } from 'react'
import { Autoplay, EffectCoverflow, Pagination, Parallax } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { classNames } from '../../shared/lib/classNames/classNames'
import { CatCard } from '../../shared/ui/CatCard/CatCard'
import cls from './HomeSlider.module.scss'

interface HomeSliderProps {
  className?: string
}

export const HomeSlider = memo((props: HomeSliderProps) => {
  const { className } = props
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
    <div className={classNames(cls.Slider, {}, [className])}>
      {cats.length && (
        <Swiper
          init={false}
          speed={2000}
          loop={true}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={50}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          parallax={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay, Parallax]}
          breakpoints={{ 760: { slidesPerView: 'auto' } }}
        >
          {cats.map((it) => (
            <SwiperSlide key={it._id}>
              <CatCard cat={it} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  )
})
