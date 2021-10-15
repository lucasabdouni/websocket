import logo from './logo.svg';
import './App.css';
import { io } from 'socket.io-client';

const socket = io('ws://localhost:3333', {
  transports: ['websocket'],
  // passar
  // query: {
  //   token: 1
  // }
});

socket.on('connect', () => {
  console.log('Front conectado!');
});

socket.on('message', (message) => {
  console.log('Mensagem =>', message);
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
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

export default App;
