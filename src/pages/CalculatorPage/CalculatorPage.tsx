import './CalculatorPage.css'
import Calculator from './components/Calculator/Calculator'
import CalcSideBar from './components/SideBar/CalcSideBar'

export default function CalculatorPage() {
    return (
        <div className='calcpage'>
            <div className='calccontent'>
                <div className='calculator-container'>
                    <Calculator />
                </div>
                <CalcSideBar />
            </div>
        </div>
    )
}