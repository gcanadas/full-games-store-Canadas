import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar />

      <ItemListContainer title='Bienvenido a Full Games' />

      <ItemDetailContainer id={5} />
    </div>
  );
}

export default App;
