import Footer from '../../componenent/footer/Footer'
import Header from '../../componenent/header/Header'
import React from 'react'
export const metadata = {
  title: "card  page",
  description: "sin in page by create next app",
icons:{

icon:"./images/bag-shopping-solid.svg"

}
  
};
const page = () => {
  return (
    <div>
        <Header/>

       <main>

       card
       </main>

        <Footer/>
    </div>
  )
}

export default page