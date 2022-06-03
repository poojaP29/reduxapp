import React from 'react'
interface myprops{
  changeState:()=>void
}
const WholeSale: React.FC<myprops> =({changeState}) =>{
  
  return (

    <h1 className="heading">Pooja Textiles
      <div className="clickButtons">
      <button className='btn1' onClick={changeState}>retailer 1</button>
      <button className='btn2' onClick={changeState}>retailer 2</button>
      <button className='btn3' onClick={changeState}>retailer 3</button>
      </div>
      </h1>
    
    
  )
}

export default WholeSale