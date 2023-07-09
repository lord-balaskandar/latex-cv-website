import { Link } from "react-router-dom";

function IntroButton(props: {display: string}) {

        const handleClick = (route: string) => {
        console.log(route)
    }
    return <Link to={"/" + props.display.toLowerCase().replace(" ",  "")}><div className="IntroButton" onClick={() => handleClick(props.display.toLowerCase().replace(" ",  ""))}>
        {props.display}
    </div></Link>
}

export default IntroButton;