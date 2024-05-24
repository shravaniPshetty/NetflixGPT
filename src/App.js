import Main from "./components/Main"
import appStore from "./utils.js/appStore";
import {Provider} from "react-redux";

function App() {
  return(
    <Provider store={appStore}>
      <Main/>
    </Provider>
  );  
}

export default App;
