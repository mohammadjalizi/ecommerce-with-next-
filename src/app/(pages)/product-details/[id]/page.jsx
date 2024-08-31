import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from 'componenent/footer/Footer'
import Header from 'componenent/header/Header'
import React from 'react'
import "./product-details.css";

async function getdata(iddd) {

    await new Promise(resolve => setTimeout(resolve, 0))

    const res = await fetch(`http://localhost:4000/products/${iddd}`,


      { next: { revalidate: 0 } }
    )

    
   
    return res.json()
  }


const page = async({params}) => {
    const objData = await getdata(params.id)
  return (
    <div
    style={{
      height: "100vh",
      display: "grid",
      alignItems: "center",
      gridTemplateRows: "auto 1fr auto",
    }}
  >
    <Header />

    <main style={{ textAlign: "center" }} className="flex">
     
      <img alt="" src={`.${objData.productImg}`} />
      <div className="product-details">
        <div style={{ justifyContent: "space-between" }} className="flex">
          <h2>{objData.title}</h2>
          <p className="price">${objData.price}</p>
        </div>
        <p className="description">
        {objData.description}
        </p>
        <button className="flex add-to-cart">
         
          <FontAwesomeIcon style={{width: "1.1rem"}} icon={faCartPlus}  />
          Add To Cart
        </button>
      </div>
    </main>

    <Footer />
  </div>
  )
}

export default page