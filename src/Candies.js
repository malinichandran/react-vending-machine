import React from "react";
import { Link } from "react-router-dom";

const Candies = () => {
    return(
        <div>
            <h1>Candies</h1>
            <Link exact to ="/">
            <button >Go Back</button>
            </Link>
            <img
             src="https://i.ytimg.com/vi/XEHBbrvH3GI/maxresdefault.jpg"
             alt="Image of Candies"
            />
        </div>

    )
}

export default Candies;
