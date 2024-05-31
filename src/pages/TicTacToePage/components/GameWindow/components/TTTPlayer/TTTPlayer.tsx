import './TTTPlayer.css'
import markO from './letter-o.png'
import markX from './letter-x.png'
import TTTPlayerScore from '../TTTPlayerScore/TTTPlayerScore'

export default function TTTPlayer({ playername, highlightSetting }) {


    return (
        <>
            <div className='ttt-player' id={playername}>
                <p className={`ttt-player-title ${highlightSetting ? 'highlight-true' : ''}`}>{playername}</p>
                <TTTPlayerScore playername={playername}/>
            </div>
        </>
    )
}