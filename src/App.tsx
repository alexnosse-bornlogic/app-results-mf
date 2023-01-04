import { AuthProvider } from "@bornlogic/util-auth-mf";
import ApplicationRoutes from "./routes";

function App() {
  return (
    <AuthProvider>
      <ApplicationRoutes />
    </AuthProvider>
  );
}

export default App;
