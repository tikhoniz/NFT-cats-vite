import { memo } from 'react'
import { classNames } from '../../../shared/lib/classNames/classNames'
import cls from './CatPage.module.scss'

interface CatPageProps {
  className?: string
}

const CatPage = ({ className }: CatPageProps) => {
  return (
    <div className={classNames(cls.CatPage, {}, [className])}>Cat Page</div>
  )
}
export default memo(CatPage)
