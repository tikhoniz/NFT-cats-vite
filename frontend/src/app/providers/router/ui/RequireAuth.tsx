// import { getAuthInited } from 'features/Auth'
// import { Navigate, useLocation } from 'react-router-dom'
// import { RoutePath } from '../config/routeConfig/routePath'
// import { RoutePath } from 'shared/config/routeConfig/routePath'
// import { useAppSelector } from 'shared/lib/hooks/reduxHooks/reduxHooks'

interface RequireAuthProps {
  children: JSX.Element
}

export function RequireAuth({ children }: RequireAuthProps) {
  // const location = useLocation()
  // const mounted = useAppSelector(getAuthInited)

  // if (!mounted) {
  // return <Navigate to={RoutePath.main} state={{ from: location }} replace />
  // }

  return children
}
