import React, { useRef ,useState} from 'react'
import {useHistory} from 'react-router-dom'


function Question3() {
    const history = useHistory()
    
    const radioRef1 = useRef(null)
    const radioRef2  = useRef(null)
    const radioRef3  = useRef(null)
    const a = localStorage.getItem("buttonp31")
    const b = localStorage.getItem("buttonp32")
    const c = localStorage.getItem("buttonp33")

    const next = (e) => {
         e.preventDefault()
         if((radioRef1.current.checked == false) && (radioRef2.current.checked == false) && (radioRef3.current.checked == false)){
             return alert("Tolong pilih opsi")
         }else{
            localStorage.setItem("buttonp31",radioRef1.current.checked)
            localStorage.setItem("buttonp32",radioRef2.current.checked)
            localStorage.setItem("buttonp33",radioRef3.current.checked)
             history.push('/page4')
         }
    }
    const back = (e) => {
        e.preventDefault()
        history.goBack()
    }
    return (
        <div> 
            <form>
            <input type='radio' className='radio-button1' onClick="checked() == true;" name='re' ref={radioRef1} checked={JSON.parse(a) === true}/>
            <p>opsi 1</p>
            <input type='radio' className='radio-button2' onClick="checked() == true;" name='re' ref={radioRef2} checked={JSON.parse(b) === true}/>
            <p>opsi 2</p>
            <input type='radio' className='radio-button3' onClick="checked() == true;" name='re' ref={radioRef3} checked={JSON.parse(c) === true}/>  
            <p>opsi 3</p>
            <button onClick={next}>Next</button>   
            <button onClick={back}>Prev</button>    
 
            </form>
        </div>
    )
}

export default Question3


