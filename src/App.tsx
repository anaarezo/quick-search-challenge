import { AppContent } from "./app.style";
import { Provider } from "react-redux";
import { setupStore } from "./store";

import Home from "./pages/Home";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const store = setupStore()

const App = () => {
  return (
    <Provider store={store}>
      <SkeletonTheme
        baseColor="#C4C4C4"
        highlightColor="#d3d3d3"
        borderRadius={0}
      >
        <AppContent>
          <Home />
        </AppContent>
      </SkeletonTheme>
    </Provider>
  );
};

export default App;
