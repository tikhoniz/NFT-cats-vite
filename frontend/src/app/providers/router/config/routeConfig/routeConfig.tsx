// import ErrorPage from 'pages/ErrorPage/ui/ErrorPage'
// import { MainPage } from 'pages/MainPage'
import { RouteProps } from 'react-router-dom'
import { AppRoutes, RoutePath } from './routePath'
import MainPage from '../../../../../pages/MainPage/ui/MainPage'
import { AdminPage } from '../../../../../pages/AdminPage'
import { CatPage } from '../../../../../pages/CatPage'
// import EnemyFindPage from 'pages/EnemyFindPage/ui/EnemyFindPage'
// import { NotFoundPage } from 'pages/NotFoundPage'
// import { BattlePage } from 'pages/BattlePage'
// import { BattleResultPage } from 'pages/BattleResultPage'
// import { CharacterCreatePage } from 'pages/CharacterCreatePage'

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.CAT]: {
    path: RoutePath.cat,
    element: <CatPage />,
  },
  [AppRoutes.ADMIN]: {
    path: RoutePath.admin,
    element: <AdminPage />,
  },
  // [AppRoutes.AVATAR_CREATE]: {
  //   path: RoutePath.avatarCreate,
  //   element: <CharacterCreatePage />,
  //   authOnly: true,
  // },
  // [AppRoutes.ENEMY_FIND]: {
  //   path: RoutePath.enemyFind,
  //   element: <EnemyFindPage />,
  //   authOnly: true,
  // },
  // [AppRoutes.BATTLE]: {
  //   path: RoutePath.battle,
  //   element: <BattlePage />,
  //   authOnly: true,
  // },
  // [AppRoutes.BATTLE_RESULT]: {
  //   path: RoutePath.battle_result,
  //   element: <BattleResultPage />,
  //   authOnly: true,
  // },
  // [AppRoutes.ERROR]: {
  //   path: `${RoutePath.error}`,
  //   element: <ErrorPage errorText="Ошибка" />,
  // },
  // [AppRoutes.NOT_FOUND]: {
  //   path: RoutePath.not_found,
  //   element: <NotFoundPage />,
  // },
}
