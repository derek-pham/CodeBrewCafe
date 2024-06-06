import './TTTPlayer.css'
import TTTPlayerScore from '../TTTPlayerScore/TTTPlayerScore'
import { TTTPlayerProps } from './tttPlayerTypes.ts';

const TTTPlayer: React.FC<TTTPlayerProps> = ({ playername, highlightSetting }) => {
    return (
        <div className='ttt-player' id={playername}>
            <p className={`ttt-player-title ${highlightSetting ? 'highlight-true' : ''}`}>{playername}</p>
            <TTTPlayerScore playername={playername} highlightSetting={false} />
        </div>
    );
};

export default TTTPlayer;