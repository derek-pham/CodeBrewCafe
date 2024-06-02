import './SimonSaysPage.css'
import SimonSaysField from './components/SimonSaysField/SimonSaysField'
import SimonSaysSideBar from './components/SideBar/SimonSaysSideBar'
import SimonSaysHeader from './components/SimonSaysHeader/SimonSaysHeader'
import SimonSaysBottom from './components/SimonSaysBottom/SimonSaysBottom'

export default function SimonSaysPage() {
    return (
        <div className='simonsayspage'>
            <div className='simonsayscontent'>
                <div className='simonsays-container'>
                    <SimonSaysHeader />
                    <SimonSaysField />
                    <SimonSaysBottom />
                </div>
                <SimonSaysSideBar />
            </div>
        </div>
    )
}