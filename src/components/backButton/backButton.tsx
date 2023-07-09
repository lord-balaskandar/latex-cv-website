import React from "react";
import { Link } from "react-router-dom";

function BackButton() {

        const handleClick = (route: string) => {
        console.log(route)
    }
    return <Link to={"/"}><div className="BackButton" onClick={() => handleClick("/")}>
        ◅Back
    </div></Link>
}

export default BackButton;