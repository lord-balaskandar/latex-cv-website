import {useEffect } from 'react';
import {BsPlayCircle, BsPauseCircle, BsSkipStartCircle, BsSkipEndCircle} from 'react-icons/bs';


function Player(props: {songs: any, setSongs: Function, isPlaying: Boolean, setIsPlaying: Function, audioElem: any, currentSong: any, setCurrentSong: Function, onPlaying: Function, songEnded: Boolean, setSongEnded: Function}) {

const PlayPause = () => {
    props.setIsPlaying(!props.isPlaying);
}

const skipBack = () => {
    let index = props.songs.findIndex((x: {title: String}) => x.title === props.currentSong.title)
    if(index === 0) {
        props.setCurrentSong(props.songs[props.songs.length-1])
        props.audioElem.current.load()
    } else {
        props.audioElem.current.load()
        props.setCurrentSong(props.songs[index - 1])
    }
    props.audioElem.current.currentTime = 0;
    props.setIsPlaying(true)    

}

const skipNext = () => {
    let index = props.songs.findIndex((x: {title: String}) => x.title === props.currentSong.title)
    if(index === props.songs.length - 1) {
        props.setCurrentSong(props.songs[0])
        props.audioElem.current.load()
    } else {
        props.setCurrentSong(props.songs[index + 1])
    }
    props.setIsPlaying(true)    

    //props.audioElem.current.currentTime = 0;
}

useEffect(() => {
    if(props.songEnded) {
        skipNext();
        props.setSongEnded(false);
    }
})

 return (<div className="player_container">
    
    <div className='player_container'>
      <div className="controls">
        <BsSkipStartCircle className='btn_action' onClick={skipBack}/>
        {props.isPlaying ? <BsPauseCircle className='btn_action pp' onClick={PlayPause}/> : <BsPlayCircle className='btn_action pp' onClick={PlayPause}/>}
        <BsSkipEndCircle className='btn_action' onClick={skipNext}/>
      </div>
      <div className='songTitle'>{props.currentSong.title}</div>    

    </div>


 </div>)
}

export default Player