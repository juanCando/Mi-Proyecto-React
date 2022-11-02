import './App.css';
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
        <NavBar></NavBar>
        <ItemsListContainer name="Bienvenidos a mateolis"></ItemsListContainer>
    </>
  );
}

export default App;
