import React ,{useState}from 'react'
import Register from './Register';
function Login1() {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[setSubmit]=useState("");
    return (
        <div>
            <h1>Login</h1><br></br>
            <div>
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
                       <button onClick={()=>setSubmit()}>submit</button> 
                       <button><Register/></button>
            </div>
        </div>
    )
}

export default Login1
