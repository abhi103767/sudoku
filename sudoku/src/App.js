import logo from './logo.svg';
import './App.css';
import Hori from './Component/Hori';
let sudoku =    [[
  0, 4, 0, 0, 0,
  0, 1, 7, 9
],
[
  0, 0, 2, 0, 0,
  8, 0, 5, 4
],
[
  0, 0, 6, 0, 0,
  5, 0, 0, 8
],
[
  0, 8, 0, 0, 7,
  0, 9, 1, 0
],
[
  0, 5, 0, 0, 9,
  0, 0, 3, 0
],
[
  0, 1, 9, 0, 6,
  0, 0, 4, 0
],
[
  3, 0, 0, 4, 0,
  0, 7, 0, 0
],
[
  5, 7, 0, 1, 0,
  0, 2, 0, 0
],
[
  9, 2, 8, 0, 0,
  0, 0, 6, 0
]
]

function App() {

 let alpha =  sudoku.map((row) => <Hori props={row} />);
 console.log(alpha);
 
  return (
    <div className="App">
    
      {alpha}
      
     
    </div>
  );
}

export default App;
