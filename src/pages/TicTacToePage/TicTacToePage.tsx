import './TicTacToePage.css'
import TTTSideBar from './components/SideBar/TTTSideBar'

export default function TicTacToePage() {
    return (
        <>
            <div className="tttpage">
                <div className="tttcontent">
                    <div></div>
                    <TTTSideBar/>
                </div>
            </div>
        </>
    )
}