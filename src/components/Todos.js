import React from 'react';
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

function Todos({todos, markComplete, delTodo}) {
  
  // console.log(props.todos);
  return (
    <div>
      { todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} markComplete={markComplete} delTodo={delTodo} />
          ))
      }
    </div>
  );
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

export default Todos;
