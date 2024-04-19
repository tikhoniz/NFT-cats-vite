import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { classNames } from '../../shared/lib/classNames/classNames'
import cls from './Slider.module.scss'

interface SliderProps {
  className?: string
  items: any[]
}

export const Slider = (props: SliderProps) => {
  const { items, className } = props
  return (
    <div className={classNames(cls.Slider, {}, [className])}>
      <Swiper
        init={false}
        loop
        speed={800}
        modules={[Pagination, Navigation, EffectCoverflow]}
        centeredSlides={true}
        effect={'coverflow'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        parallax
        spaceBetween={50}
        slidesPerView={1}
        grabCursor={true}
        breakpoints={{
          '540': {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
      >
        {items.map((item) => {
          return (
            <SwiperSlide key={item.key} className={cls.item}>
              {item}
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
