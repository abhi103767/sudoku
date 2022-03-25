import logo from './logo.svg';
import './App.css';
import Hori from './Component/Hori';
import {useState} from 'react';
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

// function Horizontal(y,x,num){
//   for ( let i = 0; i < 9 && i != x; i++){
//      if( sudoku_new[i][y] === num) {

//      }
//   }

// }

 
function App() {
   let [sudoku_new,setSudoku] = useState(sudoku);

  //  console.log(sudoku_new);

   function changeInSudoku(col,row,num){
     console.log(row,col);
     num = +num
    //  console.log(y,x,num)
    //  console.log(sudoku_new);
     if(!Horizontal(col,row,num)) alert("The number is present in horizontal");
    else if(!Vertical(col,row,num)) alert("The number is present in Vertical");
    else if(!blockOfThree(col,row,num)) alert("the number is present in 3 * 3");
   else { 
     sudoku_new[row][col] = num;
   }

//  console.log(sudoku_new[row][col]);  

   }


   function Horizontal(col,row,num){
     console.log("-------------")
    // console.log(sudoku_new[y][x]);
    console.log('row :' + row)
    for ( let i = 0; i < 9 ; i++){
      // console.log(sudoku_new[row][i])
       if( sudoku_new[row][i] === num && i != col) {
          return false;
       }
    };
    return true;
  }

  function Vertical(col,row,num){
    for ( let i = 0; i < 9 ; i++){
      // console.log(sudoku_new[i][col]);
      if( sudoku_new[i][col] === num &&  i != row) {
         return false;
      }
      
   };
   return true;
  }

   function blockOfThree(col,row,num){
    //  console.log(col,row);
   let  r = Math.floor(row/3)*3;
   let  c = Math.floor(col/3)*3;
     for ( let i = r; i < r+3; i++){
       for ( let j = c ; j <  c + 3; j++){
         console.log(sudoku_new[i][j]);
         if(sudoku_new[i][j] === num && i !== row && j !== col){
           return false;
         }
       }
     }
   return true;
  }

  function checkCorrectSudoku(){
    console.log(1);
    let row = sudoku_new.length; 
    let col = sudoku_new[0].length;
    for ( let i = 0; i < row; i++ ){
      for ( let j = 0; j < col; j++){
        if(sudoku_new[i][j] == 0){
          return false;
        }
      }
    }
    return true;
  }

 let alpha =  sudoku.map((row,i) => <Hori props={row} row={i} handleClick={ (e,x,y,num) => {
   changeInSudoku(x,y,num);
 }}/>);
 //console.log(alpha);
 
  return (
    <div className="App">
    
      {alpha}
      <button className="btn--sudoku" onClick={() => {
        if(checkCorrectSudoku()) alert('You win');
        else alert("Game is not completed yet");
      }}> Check the sudoku</button>
      
     
    </div>
  );
}

export default App;
