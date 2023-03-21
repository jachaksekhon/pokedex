import './App.css';
import Pokelist from './AppLeft/Pokelist';
import Pokestat from './AppRight/Pokestat';

function App() {
  return (
    <div className="app">


      <div className="app__left">
        <Pokelist />
        <div className="buttons">
          <button>Prev</button>
          <button>Next</button>
        </div>
        
      </div>

      <div className="app__right">
        <Pokestat />
      </div>


    </div>
  );
}

export default App;
