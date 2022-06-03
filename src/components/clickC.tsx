import React from 'react'
import OverlayC from './overlayC'
let arr:any;
interface myprops{
    changeState:()=>void
  }
const ClickC: React.FC<myprops>=({changeState})=> {
    const[check,setCheck]=React.useState(false) ; 
    
    const handleclick =()=>{
        arr=[...[<div><OverlayC /></div>],arr]
        setCheck(ps => !ps);
        console.log(arr);
}
     const onConfirm =()=>{
       arr=[];
         changeState();
     }
    return (
    <div className='transparency'>
        <OverlayC />
        <div>{arr}</div>
        <button onClick={handleclick}>Add Another Product</button>
        <button onClick={changeState}>Cancel</button>
        <button onClick={onConfirm}>submit</button>
    </div>
  )
}

export default ClickC