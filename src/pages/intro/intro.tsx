import IntroButton from '../../components/introButton/introButton'
import background from './background.mp4'
import profilePic from './pp.gif'
function Intro() {

    return <div className = "Page">
        
        <video src={background} autoPlay loop muted/>
        
        <div className='PageContent'>
            <div className='PageSubContent bigboy'>
            <div className='IntroTitle'>{"Thanushen \n Balaskandar"}</div>
            <div className='IntroSubHeading'>Passionate Software Developer</div>
            <div>
                <img className = 'ProfilePicture' src = {profilePic}/>
            </div>
            <div className='introSection'>
            <IntroButton display="Experience"/>
            <IntroButton display="Qualifications"/>
            <IntroButton display="Education"/>
            <IntroButton display="Technical Skills"/>
            <IntroButton display="Key Skills"/>
            </div>
        </div>
        </div>
    </div>
}

export default Intro