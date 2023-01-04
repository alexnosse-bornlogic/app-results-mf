import { useLocation } from "react-router-dom";

function Consolidated() {
  const location = useLocation();
  return (
    <>
      <h1>Consolidated component</h1>
      <section>Path : {location.pathname}</section>
    </>
  );
}

export { Consolidated };
