import React from 'react'
import Login from './components/Login/Login';
import Register from './components/Login/Register';

import './styles/app.scss';

function App() {
  return (
    <div className="App">
      <Login/>
      <Register/>
    </div>
  );
}

export default App;
