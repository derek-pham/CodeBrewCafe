import React, { useContext, useEffect, useState } from "react";
import './SimonSaysTitle.css';
import { SSContext } from "../../../../SimonSaysPageContext";

export default function SimonSaysTitle() {
    const { playersAnswers, sequencePattern, result, setResult, setSequenceAmount } = useContext(SSContext);
    const [resultMessage, setResultMessage] = useState('')
    const [answerIs, setAnswerIs] = useState('')
    const [renderMsg, setRenderMsg] = useState(false)

    useEffect(() => {
        if (playersAnswers.length > 0 && playersAnswers.length === sequencePattern.length) {
            const arraysMatch = (arr1, arr2) => {
                if (arr1.length !== arr2.length) return false;
                for (let i = 0; i < arr1.length; i++) {
                    if (arr1[i] !== arr2[i]) return false;
                }
                return true;
            };

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
        }
    }, [playersAnswers, sequencePattern]);

    return (
        <div className="simonsaystitle">
            {renderMsg && <p className={`${answerIs}`}>{resultMessage}</p>}
        </div>
    );
}