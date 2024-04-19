import { Loader } from '../../Loader/Loader'
import cls from './PageLoader.module.scss'
import { classNames } from '../../../lib/classNames/classNames'

interface PageLoaderProps {
  className?: string
}

export const PageLoader = ({ className }: PageLoaderProps): JSX.Element => {
  return (
    <div className={classNames(cls.PageLoader, {}, [className])}>
      <Loader className={cls.loader} />
    </div>
  )
}
