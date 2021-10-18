import React, { useRef ,useState} from 'react'
import {useHistory} from 'react-router-dom'


function Question1() {
    const history = useHistory()
    
    const radioRef1 = useRef(null)
    const radioRef2  = useRef(null)
    const radioRef3  = useRef(null)

    const [button1 , setButton1] = useState(false)
    const [button2 , setButton2] = useState(false)
    const [button3 , setButton3] = useState(false)

console.log(localStorage)
    const next = (e) => {
         e.preventDefault()
         if((radioRef1.current.checked == false) && (radioRef2.current.checked == false) && (radioRef3.current.checked == false)){
             return alert("error")
         }else{
            localStorage.setItem("button1",radioRef1.current.checked)
            localStorage.setItem("button2",radioRef2.current.checked)
            localStorage.setItem("button3",radioRef3.current.checked)
             history.push('/page2')
         }
    }


    return (
        <div> 
            <form>
            <input type='radio' className='radio-button1' onChange={()=>setButton1(radioRef1.current.checked)} name='re' ref={radioRef1} checked={localStorage.getItem("button1")}/>
            <p>opsi 1</p>
            <input type='radio' className='radio-button2' onChange={()=>setButton2(radioRef2.current.checked)}  name='re' ref={radioRef2} checked = {localStorage.getItem("button2")}/>
            <p>opsi 2</p>
            <input type='radio' className='radio-button3' onChange={()=>setButton3(radioRef3.current.checked)}  name='re' ref={radioRef3} checked={localStorage.getItem("button3")}/>  
            <p>opsi 3</p>
            <button onClick={next}>Next</button>    
            </form>
        </div>
    )
}

export default Question1


