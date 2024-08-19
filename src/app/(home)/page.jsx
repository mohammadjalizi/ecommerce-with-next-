import Footer from "../../componenent/footer/Footer";
import Header from "../../componenent/header/Header";
import Image from "next/image";
import './home.css'
import Products from "./products";




export default function Home() {
  return (
    <main className="">

<div>   <div className="top-img">
 <Header/>

      <section className="content">
        <p className="lifestyle">Lifestyle collection</p>
        <p className="men">MEN</p>
        <p className="sale">SALE UP TO <span>30% OFF</span></p>
        <p className="free-shipping">Get Free Shipping on orders over $99.00</p>
        <button>Shop Now</button>
      </section>
    </div>

    <main className="">
      <h1 className="recommended">
        <i className="fa-solid fa-check"></i>
        Recommended for you
      </h1>
<Products/>

    </main>

 <Footer/>
    
    </div>

    </main>
  );
}
