import './SimonSaysBottom.css'
import SimonSaysPlaySeq from "./components/SimonSaysPlaySeq/SimonSaysPlaySeq";
import SimonSaysLives from "./components/SimonSaysLives/SimonSaysLives";

export default function SimonSaysBottom() {
    
    return (
        <div className="simonsaysbottom">
            <SimonSaysPlaySeq/>
            <SimonSaysLives/>
        </div>
    )
}