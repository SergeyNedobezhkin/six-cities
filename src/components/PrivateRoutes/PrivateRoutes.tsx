import { Navigate } from 'react-router-dom'
import { AuthorizationStatus } from '../../constants/constants'

type PrivateRoutesProps = {
  children: any,
  authorizationStatus: AuthorizationStatus,
  redirectTo: string
}
function PrivateRoutes({ children, authorizationStatus, redirectTo }: PrivateRoutesProps) {

  return (
    <div>
      {authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={redirectTo} />}
    </div>
  )
}

export default PrivateRoutes
