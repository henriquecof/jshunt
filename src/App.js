import React from "react";
import "./styles.css";
import Header from './components/Header';
import Main from "./pages/main";

<<<<<<< HEAD


const App = () =>(
  <div className="App">
  <Header />
  <Main />
  </div>
);

export default App;
=======
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quero Jogar
          </a>                   
        </header>
      </div>
    );
  }
}export default App;
>>>>>>> bbf45d084ddb1d0269e7ba32ff415f816728eab8
