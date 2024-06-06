import './SimonSaysHeader.css'
import SimonSaySeqTracker from "./components/SimonSaySeqTracker/SimonSaySeqTracker";
import SimonSaysTitle from "./components/SimonSaysTitle/SimonSaysTitle";

export default function SimonSaysHeader() {

    return (
        <div className="simonsaysheader">
            <SimonSaysTitle />
            <SimonSaySeqTracker />
        </div>
    )
}