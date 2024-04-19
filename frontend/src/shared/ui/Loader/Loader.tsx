import { classNames } from '../../lib/classNames/classNames'
import './Loader.scss'

interface LoaderProps {
  className?: string
}

export const Loader = ({ className }: LoaderProps): JSX.Element => {
  return (
    <svg
      className={classNames('Loader', {}, [className])}
      viewBox="0 0 128 128"
      width="128px"
      height="128px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="simple_ap-grad1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(173,100%,39%)" />
          <stop offset="100%" stopColor="hsl(267,52%,49%)" />
        </linearGradient>
      </defs>
      <circle
        className="simple_ap__ring"
        r="56"
        cx="64"
        cy="64"
        fill="none"
        stroke="#ddd"
        strokeWidth="16"
        strokeLinecap="round"
      />
      <circle
        className="simple_ap__worm1"
        r="56"
        cx="64"
        cy="64"
        fill="none"
        stroke="url(#simple_ap-grad1)"
        strokeWidth="16"
        strokeLinecap="round"
        strokeDasharray="87.96 263.89"
      />
    </svg>
  )
}
