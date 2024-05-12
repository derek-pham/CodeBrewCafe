import './TTTField.css'
import TTTDiv from '../TTTDiv/TTTDiv'

export default function TTTField() {
    return (
        <>
            <div className="ttt-field">
                <TTTDiv position={0}/>
                <TTTDiv position={1}/>
                <TTTDiv position={2}/>
                <TTTDiv position={3}/>
                <TTTDiv position={4}/>
                <TTTDiv position={5}/>
                <TTTDiv position={6}/>
                <TTTDiv position={7}/>
                <TTTDiv position={8}/>
            </div>
        </>
    )
}