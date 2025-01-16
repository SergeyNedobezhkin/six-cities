export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:offerId',
  NotFound = '/not-found-page'
}


export enum AuthorizationStatus {
  NoAuth = "NO_AUTH",
  Auth = "AUTH",
  Unknown = "UNKNOWN",
}
