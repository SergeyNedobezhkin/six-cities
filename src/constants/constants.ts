export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}


export enum AuthorizationStatus {
  NoAuth = "NO_AUTH",
  Auth = "AUTH",
  Unknown = "UNKNOWN",
}
