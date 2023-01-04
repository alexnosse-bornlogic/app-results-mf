import { AUTH_PARAMS as UTIL_AUTH_PARAMS } from "@bornlogic/util-auth-mf";
import * as singleSpa from "single-spa";
import { AUTH_PARAMS, CLIENT_ID } from "../consts";

function PublicRoutes() {
  singleSpa.navigateToUrl(
    `/login?redirectTo=/root/results&${
      UTIL_AUTH_PARAMS.CLIENT_ID
    }=${CLIENT_ID}&${AUTH_PARAMS.SCOPE.KEY}=${AUTH_PARAMS.SCOPE.VALUE.join(
      ","
    )}`
  );

  return <></>;
}

export default PublicRoutes;
