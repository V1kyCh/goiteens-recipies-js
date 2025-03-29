import './App.css';
import data from './recipies.json';
import { Receptive } from './components/Recipe';

function App() {
  return (
    <div className="App">
      <ul>
        {data.map((recipe) => (
          <Receptive recipe={recipe} />
        ))}
      </ul>
    </div>
  );
}

export default App;