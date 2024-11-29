//Main root component

//import React from "react"; //This is necessary if we are using classes, otherwise its not

import Header from "./components/Header";

function App() {
  return (
    <div className="container">
      <Header />
    </div>
  );
}

//This next code is doing the same as the above code but is using class instead
/*
class App extends React.Component {
  render() {
    return <h1>Hello from a class</h1>
  }
}
*/
export default App;