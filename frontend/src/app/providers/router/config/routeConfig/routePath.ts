export enum AppRoutes {
  MAIN = 'main',
  ADMIN = 'admin',
  // ENEMY_FIND = 'enemyFind',
  // BATTLE = 'battle',
  // BATTLE_RESULT = 'battle_result',
  // ERROR = 'error',
  // NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ADMIN]: '/admin',
  // [AppRoutes.AVATAR_CREATE]: '/character-create',
  // [AppRoutes.ENEMY_FIND]: '/enemy-find',
  // [AppRoutes.BATTLE]: '/battle',
  // [AppRoutes.BATTLE_RESULT]: '/battle/result',
  // [AppRoutes.ERROR]: '/error',
  // [AppRoutes.NOT_FOUND]: '*',
}
