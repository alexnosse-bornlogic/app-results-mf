import {
  isValidTokenByClientId,
  mountUrlToLogin,
} from "@bornlogic/util-auth-mf";
import { AUTH_PARAMS, CLIENT_ID } from "../../consts";
import { Outlet } from "react-router-dom";

import * as S from "./style";
import {} from "../../../../util-auth-mf/src/consts";

function AuthLayout() {
  const isValid = isValidTokenByClientId(CLIENT_ID);
  if (!isValid) {
    mountUrlToLogin({
      redirectTo: "/root/results",
      clientId: CLIENT_ID,
      scopes: AUTH_PARAMS.SCOPE.VALUE,
    });
  }
  return (
    <S.Wrapper>
      <S.StyledNavbar />

      <S.ContentWrapper>
        <Outlet />
      </S.ContentWrapper>
    </S.Wrapper>
  );
}

export default AuthLayout;
