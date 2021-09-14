import { Provider } from "react-redux";
import "./App.css";
import Home from "./Container/Home/Index";
import { store } from "./Store/Index";

function App() {
  return (
    <>
      <Provider store={store}>
        <Home />
      </Provider>
    </>
  );
}

export default App;
