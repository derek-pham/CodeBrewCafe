import './TicTacToePage.css'
import TTTSideBar from './components/SideBar/TTTSideBar'

export default function TicTacToePage() {
    return (
        <>
            <div className="tttpage">
                <div className="tttcontent">
                    <p></p>
                    <TTTSideBar/>
                </div>
            </div>
        </>
    )
}