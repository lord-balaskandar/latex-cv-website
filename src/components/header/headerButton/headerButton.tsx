import React from "react";

function HeaderButton(props: {display: string}) {
    return <div className="HeaderButton">
        {props.display}
    </div>
}

export default HeaderButton;