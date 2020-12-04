import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { MoviesList } from './movies/MoviesList';
import { FavsList } from './movies/FavsList';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/favs">
            <FavsList />
          </Route>
          <Route path="/">
            <MoviesList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
