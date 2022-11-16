import './App.css';
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer';
import NavBar from './components/NavBar/NavBar';
import Contador from './components/Contador/Contador';


function App() {
  return (
    <>
        <NavBar></NavBar>
        <ItemsListContainer></ItemsListContainer>
        <Contador></Contador>
    </>
  );
}

export default App;
  