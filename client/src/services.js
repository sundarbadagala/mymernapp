import axios from 'axios'

const api = process.env.REACT_APP_BASE_URL

const services = {
    todos : `${api}/todos`,
    details:`${api}/details`
}

export const getTodos=()=>{
    return axios.get(services.todos)
}

export const getTodo=(id)=>{
    return axios.get(`${services.todos}/${id}`)
}

export const addTodo=(todo)=>{
    return axios.post(services.todos, todo)
}

export const deleteTodo=(id)=>{
    return axios.delete(`${services.todos}/${id}`)
}

export const updateTodo=(id, todo)=>{
    return axios.put(`${services.todos}/${id}`, todo)
}

export const getDetails=()=>{
    return axios.get(services.details)
}