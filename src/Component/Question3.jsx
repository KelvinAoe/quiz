import React, { useRef ,useState} from 'react'
import {useHistory} from 'react-router-dom'


function Question3() {
    const history = useHistory()
    
    const radioRef1 = useRef(null)
    const radioRef2  = useRef(null)
    const radioRef3  = useRef(null)

    const [button1 , setButton1] = useState()
    const [button2 , setButton2] = useState()
    const [button3 , setButton3] = useState()

    const next = (e) => {
         e.preventDefault()
         if((radioRef1.current.checked == false) && (radioRef2.current.checked == false) && (radioRef3.current.checked == false)){
             return alert("error")
         }else{
             history.push({
                 pathname : '/page4',
                 state:{
                     button1 : button1,
                     button2 : button2,
                     button3 : button3,
                    }
                })
         }
    }

    const back = (e) => {
        e.preventDefault()
        history.goBack()
    }

    return (
        <div> 
            <form>
            <input type='radio' className='radio-button1' onClick={()=>setButton1(radioRef1.current.checked=true)}  name='re' ref={radioRef1} />
            <p>opsi 1</p>
            <input type='radio' className='radio-button2' onClick={()=>setButton2(radioRef2.current.checked=true)}  name='re' ref={radioRef2}/>
            <p>opsi 2</p>
            <input type='radio' className='radio-button3' onClick={()=>setButton3(radioRef3.current.checked=true)}  name='re' ref={radioRef3}/>  
            <p>opsi 3</p>
            <button onClick={next}>Next</button>   
            <button onClick={back}>Prev</button>    
 
            </form>
        </div>
    )
}

export default Question3


