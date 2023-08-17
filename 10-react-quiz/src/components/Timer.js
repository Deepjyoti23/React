import { useEffect } from "react"

function Timer({dispatch,secondRemaining}) {
    useEffect(function(){
        setInterval(function(){
            // console.log('tick')
            dispatch({type:"tick"})

        },1000)
    },[dispatch])
    return (
        <div className="timer">
            {secondRemaining}
        </div>
    )
}

export default Timer
