import { Navigate } from 'react-router-dom'
import { AppRoute, AuthorizationStatus } from '../../constants/constants'

type PrivateRoutesProps = {
  children: any,
  authorizationStatus: AuthorizationStatus
}
function PrivateRoutes({ children, authorizationStatus }: PrivateRoutesProps) {

  return (
    <div>
      {authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login} />}
    </div>
  )
}

export default PrivateRoutes
