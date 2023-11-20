import logo from './logo.svg';
import './App.css';

function My({username,email}) {
  return (
    <div className="My">
      <header className="App-header">
      <p>{username}</p>
      <p>{email}</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

export default My;
