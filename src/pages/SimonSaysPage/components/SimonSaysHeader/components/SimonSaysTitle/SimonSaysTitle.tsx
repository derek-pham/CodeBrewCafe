import React, { useContext, useEffect, useState } from "react";
import './SimonSaysTitle.css';
import { SSContext } from "../../../../SimonSaysPageContext";

export default function SimonSaysTitle() {
    const { playersAnswers, sequencePattern, setResult,sequenceAmount, setSequenceAmount, renderMsg, setRenderMsg, alertTransform, setAlertTransform } = useContext(SSContext);
    const [resultMessage, setResultMessage] = useState('')
    const [answerIs, setAnswerIs] = useState('')

    useEffect(() => {
        if (playersAnswers.length > 0 && playersAnswers.length === sequencePattern.length) {
            const arraysMatch = (arr1, arr2) => {
                if (arr1.length !== arr2.length) return false;
                for (let i = 0; i < arr1.length; i++) {
                    if (arr1[i] !== arr2[i]) return false;
                }
                return true;
            };
            console.log(alertTransform)
            if (arraysMatch(playersAnswers, sequencePattern)) {
                setRenderMsg(true)
                setAnswerIs('correct')
                setResultMessage('CORRECT!')
                setTimeout(() => {
                    setSequenceAmount((prev) => prev + 1)
                    setResult("WIN");
                }, 1000)

                setTimeout(() => {
                    setResult("");
                    setResultMessage('')
                    setRenderMsg(false)
                    setAnswerIs('')
                }, 1300)
                // another if-statement to alert player "NEXT STAGE"
            } else {
                setRenderMsg(true)
                setAnswerIs('incorrect')
                setResultMessage('INCORRECT..')
                setTimeout(() => {
                    setResult("LOSE");
                }, 1000)

                setTimeout(() => {
                    setResult("");
                    setResultMessage('')
                    setRenderMsg(false)
                    setAnswerIs('')
                }, 1300)
            }

            if (alertTransform && arraysMatch(playersAnswers, sequencePattern)) {
                setTimeout(() => {
                    setRenderMsg(true)
                    setAnswerIs('correct')
                    setResultMessage('NEXT STAGE!')
                }, 1400)

                setTimeout(() => {
                    setResultMessage('')
                    setAnswerIs('')
                    setRenderMsg(false)
                    setAlertTransform(false);
                }, 2700)
            }
        }
    }, [playersAnswers, sequencePattern]);

    return (
        <div className="simonsaystitle">
            {renderMsg && <p className={`${answerIs}`}>{resultMessage}</p>}
        </div>
    );
}