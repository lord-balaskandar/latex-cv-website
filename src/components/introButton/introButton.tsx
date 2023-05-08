import React from "react";

function IntroButton(props: {display: string}) {
    return <div className="IntroButton">
        {props.display}
    </div>
}

export default IntroButton;