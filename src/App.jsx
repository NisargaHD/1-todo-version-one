import AppName from "./components/AppName";
import Addtodo from "./components/Addtodo";
import Aval1 from "./components/Aval1";
import Aval2 from "./components/Aval2";
import "./App.css";

function App() {
  return (
    <div className="container">
      <AppName />
      <Addtodo />
      <div className="item-cont">
        <Aval1 />
        <Aval2 />
      </div>
    </div>
  );
}

export default App;