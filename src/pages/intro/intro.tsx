import IntroButton from '../../components/introButton/introButton'
import background from './background.mp4'
import profilePic from './pp.gif'
function Intro() {

    return <div className = "Page">
        
        <video autoPlay loop muted playsInline src={background}/>
        
        <div className='PageContent'>
            <div className='PageSubContent bigboy'>
            <div className='IntroTitle'>{"Thanushen Balaskandar"}</div>
            <div className='IntroSubHeading'>GRC Product/Implementations Analyst & Developer</div>
            <div>
                <img className = 'ProfilePicture' src = {profilePic}/>
            </div>
            <div className='introSection'>
            <IntroButton display="Experience"/>
            <IntroButton display="Qualifications"/>
            <IntroButton display="Skills"/>
            </div>
        </div>
        </div>
    </div>
}

export default Intro