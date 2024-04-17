import './App.css';
import { Link } from 'react-router-dom';

import Counter from './features/counter/Counter';
import PostsList from './features/posts/PostsList';
import AddPostForm from './features/posts/AddPostForm';

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
        </ul>
      </nav>
    </div>
  );
}

export default App;
