import React, { useRef ,useState} from 'react'
import {useHistory} from 'react-router-dom'


function Question4() {

    const history = useHistory()
  
   
    const back = (e) => {
        e.preventDefault()
        history.goBack()
    }

    return (
        <div>
            <form>
            <input type='radio' className='radio-button' name='re'/>
            <p>opsi 1</p>
            <input type='radio' className='radio-button' name='re'/>
            <p>opsi 2</p>
            <input type='radio' className='radio-button' name='re'/>  
            <p>opsi 3</p>
            <button onClick={back}>Prev</button>    
            </form>
        </div>
    )
}

export default Question4


