import React, {useState} from "react";

function Calc (){
    let[Data,setData]=useState('')
    let getValue = (event)=>{
        console.log(event.target.value)
        setData(Data.concat(event.target.value))
        
    }
    let Calculate=()=>{
            setData(eval(Data).toString())
        }
        let Delete = ()=>{
            setData(Data.slice(0,-1))
        }
        let Clear = () =>{
            setData("")
        }
    return (
<>
<div className="container">
    <div className="input">
        <input  placeholder="0" value={Data}/>
    </div>

    <button onClick={getValue} value="(">(</button>
    <button onClick={getValue} value=")">)</button>
    <button onClick={getValue} value=".">.</button>
    <button onClick={Clear} value="AC">AC</button>
 
 
    <button onClick={getValue} value="7">7</button>
    <button onClick={getValue} value="8">8</button>
    <button onClick={getValue} value="9">9</button>
    <button onClick={getValue} value="*">*</button>
 
 
    <button onClick={getValue} value="4">4</button>
    <button onClick={getValue} value="5">5</button>
    <button onClick={getValue} value="6">6</button>
    <button onClick={getValue} value="-">-</button>
 
 
    <button onClick={getValue} value="1">1</button>
    <button onClick={getValue} value="2">2</button>
    <button onClick={getValue} value="3">3</button>
    <button onClick={getValue} value="+">+</button>
 
 
    <button onClick={getValue} value="0">0</button>
    <button onClick={Calculate} >=</button>
    <button onClick={Delete} value="Del">DEL</button>
    <button onClick={getValue} value="/">/</button>
</div> 


</>
    )
}

export default Calc;