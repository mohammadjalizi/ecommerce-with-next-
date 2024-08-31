import React from 'react'
import Header from "componenent/header/Header";

export const metadata = {
  title: "sigin  page",
  description: "sin in page by create next app",
icons:{

icon:"./images/bag-shopping-solid.svg"

}
  
};

const Pge = () => {
  return (

    <>
          <Header issigninpage={true}/>
   
    <main className="px-3">
    <form style={{ textAlign: "left" }}>
      <div className="mb-4">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Sign in
      </button>
    </form>
  </main>
  </>
  )
}

export default Pge