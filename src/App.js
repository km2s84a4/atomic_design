import { Router } from "./router/Router";

import { UserProvider } from "./providers/UserProvider";
import "./styles.css";

export default function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}
