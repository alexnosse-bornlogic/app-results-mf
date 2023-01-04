import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PATH_ROUTES } from "../consts";
import AuthLayout from "../components/AuthLayout";
import { Consolidated, Home } from "../controllers";

function AuthenticatedRoutes() {
  const { AUTHENTICATED } = PATH_ROUTES;
  return (
    <BrowserRouter basename="root/results">
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Home />} />
          <Route path={AUTHENTICATED.CONSOLIDATED} element={<Consolidated />} />
          <Route path={AUTHENTICATED.LEADS} element={<Consolidated />} />
          <Route path={AUTHENTICATED.CONVERSION} element={<Consolidated />} />
          <Route path={AUTHENTICATED.GROUPS} element={<Consolidated />} />
          <Route path={AUTHENTICATED.ACCOUNT} element={<Consolidated />} />

          <Route path={AUTHENTICATED.PAGE} element={<Consolidated />} />
          <Route path={AUTHENTICATED.ENGAGEMENT} element={<Consolidated />} />
          <Route path={AUTHENTICATED.VIDEO_VIEWS} element={<Consolidated />} />
          <Route path={AUTHENTICATED.AGE_GENDER} element={<Consolidated />} />
          <Route path={AUTHENTICATED.DEVICE} element={<Consolidated />} />
          <Route path={AUTHENTICATED.CHANNEL} element={<Consolidated />} />
          <Route path={AUTHENTICATED.CUSTOM} element={<Consolidated />} />
          <Route path={AUTHENTICATED.STATEMENT} element={<Consolidated />} />
          <Route path={AUTHENTICATED.SALES} element={<Consolidated />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AuthenticatedRoutes;
