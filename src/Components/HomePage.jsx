import React from "react";
import Navigation from "./Navigation";
function HomePage() {
  return (
    <>
      <Navigation />
      <div className="container">
          <h1 
          style={{
              textAlign:"center",
              fontSize:"50px"
          }}
          >Welcome To My Page</h1>
      <div class="row align-items-center my-5">
          <div class="col-lg-7">
           
          <img
            class="img-fluid rounded mb-4 mb-lg-0"
            src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"
            alt=""
            width="50%"
            height="50%"
          />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Nature</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
       
        
        
    </>
  );
}
export default HomePage;
