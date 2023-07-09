import { useEffect, useRef, useState } from 'react';
import songsData from './songsData'
import Player from './player';

function MP3Player() {
    const [songs, setSongs] = useState(songsData)
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentSong, setCurrentSong] = useState(songsData[0])
    const [songEnded, setSongEnded]= useState(false)
    const audioElem: any = useRef();


    useEffect(() => {
        audioElem.current.volume = 0.2
        if(isPlaying) {
            audioElem.current.play();
        } else {
            audioElem.current.pause();
        }
    },[isPlaying, currentSong, songEnded])


    const onPlaying = () => setCurrentSong(currentSong)

    const onEnded = () => setSongEnded(true)


    return (
        <div className="MediaPlayer">
            <audio src = {`http://localhost:8081/songs/${currentSong.url}`} ref={audioElem} onTimeUpdate={onPlaying} onEnded={onEnded} autoPlay/>
            <Player songs={songs} setSongs={setSongs} isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioElem={audioElem} currentSong={currentSong} setCurrentSong={setCurrentSong} onPlaying = {onPlaying} songEnded={songEnded} setSongEnded={setSongEnded}/>
        </div>
    )
}

export default MP3Player;