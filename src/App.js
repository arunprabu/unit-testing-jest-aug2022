import './App.css';
import About from './components/About/About';
import Company from './components/Company/Company';
import Counter from './components/Counter/Counter';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Unit Testing!!!</h1>

      <About />

      <hr/>
      <Company name="Cognizant"/>
      
      <hr/>
      <Counter />
    </div>
  );
}

export default App;
