import { AppContent } from "./app.style";
import { Provider } from "react-redux";
import { store } from "./store";

import Home from "./pages/Home";

function App() {
  return (
    <Provider store={store}>
      <AppContent>
        <Home />
      </AppContent>
    </Provider>
  );
}

export default App;
