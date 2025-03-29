import './App.css';
import data from './recipies.json';
import { Receptive } from './components/Recipe/Recipe';

function App() {
  return (
    <div className="App">
      <h1 className='title'>Menu</h1>
      <ul className='recipeList'>
        {data.map((recipe) => (
          <Receptive recipe={recipe} />
        ))}
      </ul>
    </div>
  );
}

export default App;