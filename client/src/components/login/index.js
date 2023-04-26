import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import {loginReqest} from './redux/actions/loginActions'

function Index() {
    const dispatch = useDispatch()
    const [state,setState] = useState({
        email:'',
        password:'',
    })
    const handleChnage=(e)=>{
        setState({...state, [e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(loginReqest(state))
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='email' value={state.email} onChange={handleChnage} placeholder='enter email'/>
                <input type='text' name='password' value={state.password} onChange={handleChnage} placeholder='enter password'/>
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default Index
