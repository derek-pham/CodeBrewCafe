import './SimonSaysPage.css'
import SimonSaysField from './components/SimonSaysField/SimonSaysField'
import SimonSaysSideBar from './components/SideBar/SimonSaysSideBar'
import SimonSaysHeader from './components/SimonSaysHeader/SimonSaysHeader'
import SimonSaysBottom from './components/SimonSaysBottom/SimonSaysBottom'
import { SimonSaysPageContextProvider } from './SimonSaysPageContext'

export default function SimonSaysPage() {
    return (
        <SimonSaysPageContextProvider>
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
        </SimonSaysPageContextProvider>
    )
}