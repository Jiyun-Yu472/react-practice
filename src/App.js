import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/posts">posts</Link>
          </li>
          <li>
            <Link to="/socket">socket</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
