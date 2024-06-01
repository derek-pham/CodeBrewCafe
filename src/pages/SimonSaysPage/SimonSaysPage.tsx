import './SimonSaysPage.css'

import SimonSaysSideBar from './components/SideBar/SimonSaysSideBar'

export default function SimonSaysPage() {
    return (
        <div className='simonsayspage'>
            <div className='simonsayscontent'>
                <div className='simonsays-container'>
                </div>
                <SimonSaysSideBar />
            </div>
        </div>
    )
}