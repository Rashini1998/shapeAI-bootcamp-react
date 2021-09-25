import React from "react";
import Navigation from "./Navigation";
function HomePage() {
    return(
    <>
    <Navigation/>
    <div style={{
        color:"green",
        fontSize:"50px",
        backgroundColor:"yellow",

    }}
    
    >
        Welcome to Home Page
    </div>
    
    </>
    );
    
}
export default HomePage;