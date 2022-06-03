import React, { useState } from 'react'
import WholeSale from './components/WholeSale'
import RetailerOne from './components/retailerOne'
import RetailerTwo from './components/retailerTwo'
import RetailerThree from './components/retailerThree'
import ClickC from './components/clickC'
function App() {
  const [addProduct, setAddProduct]=useState(false);
  const changeState=()=>{
    setAddProduct((ps)=>!ps);
  }
  return (
    <div>
      {addProduct && <div className='float'>
      <ClickC changeState={()=>changeState()}/>
      </div>}
      <WholeSale changeState={()=>changeState()}/>
      <nav className="content">
        <span className="rOne"><RetailerOne /></span>
        <span className="rTwo"><RetailerTwo /></span>
        <span className="rThree"><RetailerThree /></span>
      
      </nav>
      
    </div>
  )
}

export default App