import React,{useState} from 'react'
import Login1 from './Login1';
function Register() {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[place,setPlace]=useState("");
    const[setSubmit]=useState("");
    const[setClear]=useState("");
    
    return (

        <div>
            <h1>user register</h1><br></br>
            <div>
                <label>Name:
                <input type="text" 
                       value={name} 
                       onChange={event=>setName(event.target.value)}
                       />
                       </label><br></br>
                <label>Email:
                <input type="email" 
                       value={email} 
                       onChange={event=>setEmail(event.target.value)}
                       />
                       </label><br></br>    
                <label>Password:
                <input type="password" 
                       value={password} 
                       onChange={event=>setPassword(event.target.value)}/>
                       </label> <br></br> 
                <label>Place:
                <input type="text" 
                       value={place} 
                       onChange={event=>setPlace(event.target.value)}/>
                       </label> <br></br>
                
                <button onClick={()=>setSubmit()}>submit</button> 
                <Login1/>
                <button onClick={()=>setClear()}>clear</button>
                </div> 
        </div>      
    )
}

export default Register
