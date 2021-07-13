import React from "react";
import { Link } from "react-router-dom";

const Chips = () => {
    return(
        <div>
            <h1>Chips</h1>
           
            <Link exact to ="/">
            <button >Go Back</button>
            </Link>
            
            
            <img
                src="https://images-na.ssl-images-amazon.com/images/I/91TKOKJe2zL._SL1500_.jpg"
                alt="Image of Chips"
            />
            
        </div>

    )
}

export default Chips;
