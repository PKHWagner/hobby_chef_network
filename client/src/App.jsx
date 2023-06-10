import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './components/Index'
import SignIn from './components/user/SignIn';
import SignUp from './components/user/SignUp';

function App() {
  return (
    <div>
      {/* <header className="App-header">
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
      </header> */}
      <BrowserRouter>
        <Routes>
          <Route element={<Index />} path='/' />
          <Route element={<SignIn />} path='/signin' />
          <Route element={<SignUp />} path='/signup' />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
