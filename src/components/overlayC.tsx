import React, { useEffect, useState } from 'react'
import data from '../data.json'
import { useForm } from 'react-hook-form';
let arra=[];
let allData:any=[];
function OverlayC() {
  const [products, setProducts] = useState(data.shop);
  const [prize, setprize] = useState(0)
  const [product, setproduct] = useState()
  const [quantity, setquantity] = useState()
  const [totalPrize, settotalPrize] = useState(0)
  const [tprice,setTprice]=useState(0)
  const { handleSubmit, register } = useForm()
  useEffect(() => {
    const temp: any = product && data.shop.filter((i) => (i.dept === product))
    //console.log(temp[0].prize)
    product && setprize(temp[0].prize)
    quantity && settotalPrize(temp[0].prize * quantity)
  }, [product, quantity])
  const formSubmit = (datas:any) => {
    
    allData=[...allData,datas]
    const temp: any = data.shop.filter((i:any) => (i.dept === datas.products))
    const totalPrize=temp[0].prize * datas.quantity
    allData=[...allData, totalPrize ]
    console.log(allData)
  }
  
  return (
    <>
      <form className="overlaying--effect" onSubmit={handleSubmit(formSubmit)} >
        {/* products mapping */}
        <label>choose department :</label>
        <select  {...register("products")} name="products" onChange={(e: any) => { e.target.value && setproduct(e.target.value) }}>
          <option value={"none"} label='select product'></option>
          {products.map((datas: any, index: number) => <option key={index} value={datas.dept}>{datas.dept}</option>)}
        </select>
        <br></br>
        {/* No of quantity mapping */}
        <label>choose Quantity :</label>
        <select {...register("quantity")} name="quantity" onChange={(e: any) => { e.target.value && setquantity(e.target.value) }}>
          <option value={0} label='select quantity'></option>
          {products && products.map((datas: any, index: number) => <option key={index} value={index + 1} >{index + 1}</option>)}
        </select><br></br>
        
        {/* Displaying price */}
        <label>Product price: ₹ {prize}</label><br></br>
        
        <label>Total Price: ₹ {totalPrize}</label><br></br>
        

        <button type='submit' >Add Product Details</button>
       

        <hr></hr>
      </form>
    </>
  )
}

export default OverlayC