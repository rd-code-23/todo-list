import React, { useContext, useState, useEffect } from 'react';
import { TaskListContext } from '../context/TaskListContext.jsx';

const TaskForm = () => {

    const { addTask, clearList, editItem, editTask } = useContext(TaskListContext);
    const [title, setTitle] = useState('') ;

    const handleChange = e => {
        setTitle(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (editItem === null) {
            addTask(title)
            setTitle("")
        } else {
            editTask(title, editItem.id)
        }
    }

    //will only run if editItem is updated
    useEffect(() => {
        if (editItem !== null) {
            setTitle(editItem.title)
            console.log(editItem);
        } else {
            setTitle("")
        }
    }, [editItem]);

    return (
        <>
            <form onSubmit={handleSubmit} className="form">
                <input type="text" value={title} onChange={handleChange} className="task-input" placeholder="Add Task" required />

                <div className="buttons">
                    <button type="submit" className="btn add-task-btn"> {!editItem ? 'Add Task' : 'Edit Task'}</button>
                    <button className="btn clear-btn" onClick={clearList}>Clear</button>
                </div>
            </form>

        </>
    )
}

export default TaskForm
