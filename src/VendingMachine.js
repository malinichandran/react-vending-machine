import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Chips from "./Chips";
import Candies from "./Candies";
import Cookies from "./Cookies";
import Home from "./Home";

const VendingMachine = () => {
return(
    <div>
        <BrowserRouter>
            <NavBar/>
            <Route exact path="/chips">
                <Chips/>
            </Route>
            <Route excat path="/cookies">
                <Cookies/>
            </Route>
            <Route exact path="/candies">
                <Candies/>
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
        </BrowserRouter>
    </div>
)
}

export default VendingMachine;