import './Calculator.css'
import CalcSideBar from './components/SideBar/CalcSideBar'

export default function CalculatorPage() {
    return (
        <div className='calcpage'>
            <div className='calccontent'>
            <div></div>
            <CalcSideBar />
            </div>
        </div>
    )
}