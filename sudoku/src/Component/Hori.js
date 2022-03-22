import React from 'react'
import './Hori.css'
function onDivChange(e){
    const value = e.target.children;
    console.log(value);
   if( e.target.innerHTML !== '') console.log(e.target.innerHTML);

    // setInterval(() => {
    //    console.log(e.target.innerHTML);
    // },1000)

}
    
    

function Hori(props) {
    //console.log(props);
   console.log(props.props);
   let arr = props.props;
  let boxes = arr.map((item) => <div className='box' contentEditable="true" onInput ={onDivChange} >{item}</div>)

    
   

    console.log(boxes)
    return (
        <div className='Hori--'>
            {boxes}
        </div>
    )
}

export default Hori
