import { classNames } from '../../../lib/classNames/classNames'
import cls from './Page.module.scss'
import { ReactNode } from 'react'

interface PageProps {
  className?: string
  children: ReactNode
}
export const Page = (props: PageProps) => {
  const { className, children } = props
  return (
    <main className={classNames(cls.Page, {}, [className])}>{children}</main>
  )
}
