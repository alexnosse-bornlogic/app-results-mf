// @ts-ignore
import { useAuth } from "@bornlogic/util-auth-mf";

import AuthenticatedRoutes from "./authenticated";
import PublicRoutes from "./public";

function Routes() {
  const { hasAuthToken } = useAuth();
  return hasAuthToken() ? <AuthenticatedRoutes /> : <PublicRoutes />;
}

export default Routes;
