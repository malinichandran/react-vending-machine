import React from "react";
import { Link } from "react-router-dom";

const Cookies = () => {
    return(
        <div>
            <h1>Cookies</h1>
            <Link exact to ="/">
            <button >Go Back</button>
            </Link>
            <img
             src="https://m.media-amazon.com/images/I/91eK+xKKiZL._SX569_.jpg"
             alt="Image of Cookies"
             
            />
        </div>

    )
}

export default Cookies;
