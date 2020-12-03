import './App.css';
// html
const title = <h1 className="title">react大法</h1>

// data
// const songs = [ 
//   {id: 1, name: '痴心绝对'}, 
//   {id: 2, name: '像我这样的人'}, 
//   {id: 3, name: '南山南'}, 
// ]

// const list = (
//   <ul>
//     {songs.map(tiem => <li key={tiem.id}>{tiem.id+tiem.name}</li>)}
//   </ul>
//   )


function App() {
  return (
    <div className="App">
      {title}
      {/* {list} */}
    </div> 
  );
}

export default App;
