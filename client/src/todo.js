import { useEffect, useState } from "react";
import { addTodo, deleteTodo, updateTodo, getTodos } from "./services";
import Card from "./components/card";
import Header from "./components/header";
import Footer from './components/footer'
import {useDispatch, useSelector} from 'react-redux'
import {getTodosRequest} from 'reduxs/actions/getTodos'
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch()
  useEffect(() => {
    (async () => {
      const res = await getTodos();
      setTodos(res.data);
    })();
    // const res = dispatch(getTodosRequest())
    // console.log('=>',res)
  }, []);
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = async () => {
    const reqBody = { todos: todo };
    try {
      const res = await addTodo(reqBody);
      console.log(res);
      if (res.status === 200 && res.statusText === "OK") {
        setTodos([...todos, res.data]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (id) => {
    try {
      const res = await deleteTodo(id);
      console.log(res);
      if (res.status === 200 && res.statusText === "OK") {
        setTodos(todos.filter((item) => item._id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdate = async (id, data) => {
    try {
      const res = await updateTodo(id, { todo: data});
      console.log(res)
      if (res.status === 200 && res.statusText === "OK") {
        setTodos(
          todos.map((item) => {
            if (item._id === id) {
              return {...item, todo:data};
            }
            return item;
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleComplete=async(id, isCompleted)=>{
    try {
      const res = await updateTodo(id, {completed:isCompleted ? false : true})
      if(res.status === 200 && res.statusText === 'OK'){
        setTodos(todos.map(item =>{
          if(item._id === id){
            return {...item, completed:isCompleted ? false : true}
          }
          return item
        }))
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    axios.get('http://localhost:9090/details')
    .then(res => console.log(res.data))
  },[])
  return (
    <div>
      <Header title='my todos' count={todos.length}/>
      <input type="text" value={todo} onChange={handleChange} />
      <button onClick={handleSubmit}>Add</button>
      {todos.map((item) => (
        <Card
          key={item._id}
          item={item}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          handleComplete={handleComplete}
        />
      ))}
      <Footer todos={todos}/>
    </div>
  );
}

export default App;
