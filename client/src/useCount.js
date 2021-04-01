import {useState,useRef,useEffect} from 'react'

function useCount(duration){
    
    const [inputText,setInputText] = useState("")
    const [timeRemaining,setTimeRemaining] = useState(duration)
    const [timeRunning,setTimeRunning] = useState(false)
    const [wordsCount,setWordCount] = useState(0)
    const [btnEnable,setBtnEnable] = useState(false)
    const inputRef = useRef(null)

    function handleChange(e){
        const {value} = e.target
        setInputText(value)
    }

    function startGame(e){
        e.preventDefault()
        setTimeRunning(true)
        setTimeRemaining(duration)
        setInputText("")
        setWordCount(0)
        setBtnEnable(true)
        inputRef.current.disabled = false
        inputRef.current.focus()
        //console.log(inputRef)
    }

    function endGame(){
        setWordCount(wordCount(inputText))
        setTimeRunning(false)
        setBtnEnable(false)
    }

    useEffect(()=>{
        if(timeRemaining > 0 && (timeRunning)){
            setTimeout(()=>{
            setTimeRemaining(time => time - 1)
        
        },1000)}

        if(timeRemaining == 0){
           endGame()
        }
    },[timeRemaining,timeRunning])

    function wordCount(text){
        const wcount = text.trim().split(" ")
        const filterword = wcount.filter(word => word !== "")
        return filterword.length
    }

    return {inputRef,timeRemaining,timeRunning,inputText,handleChange,btnEnable,startGame,wordsCount}
}

export default useCount