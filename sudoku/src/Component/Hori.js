import React from 'react'
import './Hori.css'
function onDivChange(e,x,y,handleClick) {
    const value = e.target.index;
   // console.log(x,y);
    // console.log(value);
    if (e.target.innerHTML !== '') {
        console.log(e.target.innerHTML);
        handleClick(e,y,x,e.target.innerHTML);
    }

    // setInterval(() => {
    //    console.log(e.target.innerHTML);
    // },1000)

}



function Hori(props) {
    //console.log(props);
  let handleClick = props.handleClick;


    console.log(props.props);
    console.log(props.row);
    let arr = props.props;
    let boxes = arr.map((item, col) => <div className='box' contentEditable="true" onInput={(e) => {
        onDivChange(e,props.row,col,handleClick);
    }}  >{item}</div>)




    console.log(boxes)
    return (
        <div className='Hori--'>
            {boxes}
        </div>
    )
}

export default Hori
