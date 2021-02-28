import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store.js";

import Root from './components/root';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Root />
      </div>
    </Provider>
  );
}

export default App;
