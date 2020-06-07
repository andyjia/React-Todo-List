import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/layout/Header'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import About from './components/pages/About'

import './App.css';
import Axios from 'axios';

function App() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    console.log('useEffect');
    
    Axios.get('http://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => setTodos(res.data))
  },[setTodos])
  // console.log(todos);


  function markComplete(id) {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }));
  }

  function delTodo(id) {
    // setTodos(todos.filter(todo => todo.id !== id));
    console.log(id);
    
    Axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => setTodos(todos.filter(todo => todo.id !== id)))
  }

  function addTodo(title) {
    console.log(title);
    Axios.post('http://jsonplaceholder.typicode.com/todos',{
      title,
      completed: false
    }).then(res => {console.log('ok',[...todos, res.data]);setTodos([...todos, res.data])}).catch(e => console.log('error', e))
    console.log('test');
    
  }
  
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} markComplete={markComplete} delTodo={delTodo}  />
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </div>
      </div>
    </Router>
  );
}



export default App;
