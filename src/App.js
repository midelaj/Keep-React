import './App.css';
import Classcomp from './components/Classcomp';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Contact detail={{ name: "midelaj", age: "21" }} />
      <Classcomp />
      <h1>hello world</h1>
    </div>
  );
}

export default App;
