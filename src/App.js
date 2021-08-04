// import logo from "./logo.svg";
import "./App.css";
// require("dotenv").config({ path: ".env" });
require("dotenv").config();
function App() {
  return (
    <div className="App">
      <div>yo {process.env.REACT_APP_MY_VAR}</div>
      <div>yo{process.env.NODE_ENV}</div>
      {/* <div>yo{process.env.REACT_APP_DSN}</div> */}
    </div>
  );
}

export default App;
