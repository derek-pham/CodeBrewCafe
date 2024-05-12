import './TicTacToePage.css'
import TTTSideBar from './components/SideBar/TTTSideBar'
import GameWindow from './components/GameWindow/GameWindow'
import { TicTacToePageContextProvider } from './TicTacToePageContext'

export default function TicTacToePage() {
    return (
        <TicTacToePageContextProvider>
            <div className="tttpage">
                <div className="tttcontent">
                    <GameWindow />
                    <TTTSideBar />
                </div>
            </div>
        </TicTacToePageContextProvider>
    )
}