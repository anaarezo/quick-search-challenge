import { AppContent, AppHeader } from "./app.style";

import Home from "./pages/Home";

function App() {
  return (
    <AppContent>
      <AppHeader>
        <Home />
      </AppHeader>
    </AppContent>
  );
}

export default App;
