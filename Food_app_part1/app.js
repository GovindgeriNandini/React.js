import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - logo
 *  - nav-items
 * Body
 *  - Search
 *  - RestaurantContainer
 *  - RestaurantCard
 * Footer
 *  - Copyright
 *  - Address
 *  - ContactUs
 *  - Links
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

const Header = () => {
   return (
            <div className="header">
                
                <div className="logo">
                    <img src="https://cdn5.vectorstock.com/i/1000x1000/78/59/healthy-food-application-logo-vector-34007859.jpg"/>
                </div>
            
                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Profile</li>
                        <li>Cart</li>
                    </ul>

                </div>


            </div>
    );
};

const RestaurantCard = (props) => {
    return (
        <div className="res-card" style={{"background":"#bebedfff"}}>
            <img className="res-bluesea"
             src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/4/10/e93b4e3b-79d9-4ccc-b09e-168426ff5e3f_077fd320-6f10-489e-bcf0-2d344aeda2a5.jpg"
             alt ="food"
            />
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>{props.rating}</h4>
            <h4>{props.deliveryTime}</h4>
        </div>
    );
};

const Body = () => {
    return ( 
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard 
                    resName="Blue Sea" 
                    cuisine="Italian, Asain, Korean" 
                    rating="4.4 Stars"
                    deliveryTime="30 mintues"
                />    
            </div> 
        </div>
    );
};

const AppLayout = () => {
   return (
        <div className="app-container">
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
 