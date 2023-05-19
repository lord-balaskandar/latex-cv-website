import IntroButton from '../../components/introButton/introButton'
import background from './background.mp4'
function Intro() {
    return <div className = "Page">
        
        <video src={background} autoPlay loop muted/>
        
        <div className='PageContent'>
            <div className='PageSubContent'>
            <div className='IntroTitle'>{"Thanushen \n Balaskandar"}</div>
            <div className='IntroSubHeading'>Passionate Software Developer</div>
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