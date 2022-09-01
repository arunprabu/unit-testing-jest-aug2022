import './App.css';
import About from './components/About/About';
import Company from './components/Company/Company';
import Counter from './components/Counter/Counter';
import Todos from './components/Todos/Todos';
import Movies from './containers/Movies/Movies';

function App() {

  const movieInfo = {
    id: 123131,
    title: 'Jurassic Park',
    url: 'https://www.imdb.com/title/tt0107290/'
  }
  
  return (
    <div className="App">
      <h1>Welcome to Unit Testing!!!</h1>

      <About />

      <hr/>
      <Company name="Cognizant"/>
      
      <hr/>
      <Counter />

      <hr />
      <Movies info={movieInfo}/>

      <hr/>
      <Todos />
    </div>
  );
}

export default App;
