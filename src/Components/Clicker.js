import { useState, useEffect } from 'react';


const Clicker = () => {

    let [count, setCount] = useState(0)
    let [incrementor, setIncrementor] = useState(1)
   
    
    const handleClick = () => {
        setCount(count+incrementor)
        
    }

    useEffect(() => {
        console.log('useEffect ran')
    }, [count])
    
    const PayButton = () => {

        setIncrementor(incrementor + 1)
        
        setCount(count - 10)

        if (count < 10) {
            
            alert("You can't afford that!")
            setCount(count)
            setIncrementor(incrementor)

        }
        
    }

    const PlayAgain = () => {
        setCount(count = 0)
        setIncrementor(incrementor = 1)
    }


    if (count >= 100) {
        return (
            <div>
                <main>
                <h1>You Win!</h1>
                    <button onClick={() => PlayAgain()}>Play again?</button>
                </main>
            </div>
        )
        
    }

   
    return (
        
        <div>
            
            <main>
                
                <h1 className='CurrentScore'>Current Score: {count}</h1>
                <button onClick={() => handleClick()}>+{incrementor}</button>
                <br/> <br/>
                <button onClick={() => PayButton()}>Pay 10 points to change from +{incrementor} to +{incrementor+1}</button>
                
                </main>
        </div>
    ) 
            
        }

export default Clicker