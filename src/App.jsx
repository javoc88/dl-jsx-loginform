import React from "react";
import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Registro from "./components/Registro";

function App() {
  const [alert, setAlert] = useState({msg: "", color: ""})
  return <Registro alert={alert} setAlert={setAlert}/>;
}

export default App;
