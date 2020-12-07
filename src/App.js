import './App.css';
import HomePage from './homepage/homepage'
// html
const title = <h1 className="title">react大法</h1>


function App() {
  return (
    <div className="App">
      {title}
      <HomePage />
    </div> 
  );
}

export default App;
