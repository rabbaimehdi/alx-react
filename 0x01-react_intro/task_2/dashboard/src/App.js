import holberton_logo from './holberton-logo.jpg';
import './App.css';
import {getFooterCopy,getFullYear} from './utils.js';

function App() {
  return (
    <>
      <div className="App-header">
        <img src={holberton_logo} alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label for='email'>Email</label>
        <input type='text' name = 'email' id = 'email'></input>
        <label for='password'>Password</label>
        <input type='password' name = 'password' id = 'password'></input>
        <button>OK</button>
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </>
  );
}

export default App;
