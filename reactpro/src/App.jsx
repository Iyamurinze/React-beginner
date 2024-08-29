import { useState } from 'react';
import img1 from './assets/img1.png';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="page">
      <header>
        <nav className='nav'>
          <img src={img1} width="60px" alt="Description of img1" />
          <h3>React fact</h3>
          <p className='nav-item'>
            React Course - project 1
          </p>
          </nav>
          </header>
      <main>
      <h1 className='main-title'>Fun fact about React</h1>
      <ul className='main-fact'>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walker</li>
        <li>Has well over 100k stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Power thousands of enterprise apps, including mobile apps</li>
      </ul>
      </main>
    </div>
  );
}

export default App;
