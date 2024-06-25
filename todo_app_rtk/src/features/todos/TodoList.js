import { useGetTodosQuery } from "../api/apiSlice";

// import React, { useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faTrash, faUpload} from '@fortawesome/free-solid-svg-icons';

function TodoList(){
    // const [newTodo, setNewTodo] = useState('')

    // const {
    //     data: todos,
    //     isLoading,
    //     isSuccess,
    //     isError,
    //     error
    // } = useGetTodosQuery()   

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     //add todo
    //     setNewTodo('');
    // }

    // const newItemSection = 
    // <form onSubmit={handleSubmit}>
    //     <label htmlFor="new-todo">Enter a new Todo item</label>
    //     <div className="new-todo">
    //         <input 
    //         type="text"
    //         id="new-todo"
    //         value={newTodo}
    //         onChange={(e) => setNewTodo(e.target.value)}
    //         placeholder="Enter New Todo"
    //          />
    //     </div>
    //     <button className="submit">
    //         <FontAwesomeIcon icon={faUpload} />
    //     </button>
    // </form>

    // let content;
    // if (isLoading){
    //     content = <p>Loading...</p>
    // } else if (isSuccess){
    //     content = JSON.stringify(todos)
    // } else if (isError){
    //     content = <p>{error}</p>
    // }

    return (
        <main>
            <h1>Data:</h1>
            
        </main>
    )
}

export default TodoList; 