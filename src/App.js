import logo from './logo.svg';
import './App.css';
import './component/Helloworld';
import Helloworld from './component/Helloworld';
import Button from './component/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          If you like reload, if not, go and sleep
          <Helloworld />
          <Button />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
