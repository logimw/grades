import logo from "assets/logo.svg";
import "./Root.css";
import UserList from "components/UserList/UserList";

function Root() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/Root.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <UserList />
      </header>
    </div>
  );
}

export default Root;
