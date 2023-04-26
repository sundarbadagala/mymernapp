import axios from 'axios'
import React, { useState } from 'react'

function Index() {
    const [state,setState] = useState({
        username:'',
        email:'',
        password:'',
        confirmpassword:''
    })
    const handleChnage=(e)=>{
        setState({...state, [e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(state)
        axios.post('http://localhost:9090/register', state)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='username' value={state.username} onChange={handleChnage} placeholder='enter username'/>
                <input type='text' name='email' value={state.email} onChange={handleChnage} placeholder='enter email'/>
                <input type='text' name='password' value={state.password} onChange={handleChnage} placeholder='enter password'/>
                <input type='text' name='confirmpassword' value={state.confirmpassword} onChange={handleChnage} placeholder='enter confirm password'/>
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default Index
