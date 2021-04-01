import React,{useState,useEffect,useRef} from 'react'
import useCount from "./useCount"

function App(){
    const {inputRef,timeRemaining,timeRunning,inputText,handleChange,btnEnable,startGame,wordsCount} = useCount(6)

    return(
        <div>
            <h1>How fast do you type?</h1>
            <textarea ref={inputRef} disabled={!timeRunning} name="inputText" value={inputText} onChange={handleChange} />
            <h4>Time Remaining : {timeRemaining}</h4>
            <button disabled={btnEnable} onClick={startGame}>Start</button>
            <h1>Word Count : {wordsCount}</h1>
        </div>
    )
}

export default App