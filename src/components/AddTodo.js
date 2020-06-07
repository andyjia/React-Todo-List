import React, {useState} from 'react'
import PropTypes from 'prop-types'

function AddTodo({addTodo}) {
    const [title, setTitle] = useState('')
    
    function onChange(e) {
        setTitle(e.target.value)
    }
    
    function onSubmit(e) {
        e.preventDefault();
        addTodo(title)
        setTitle('')
    }

    return (
        <form style={{display: 'flex'}} onSubmit={onSubmit}>
            <input 
                type="text"
                name="title" 
                style={{flex: '10', padding: '5px'}} 
                placeholder="Add Todo ..."
                value={title}
                onChange={onChange}
            />
            <input 
                type="submit" 
                value="Submit" 
                className="btn" 
                style={{flex: '1'}} />
        </form>
    )
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo
