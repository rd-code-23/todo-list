import React, { useContext, useState, useEffect } from 'react';
import { TaskListContext } from '../context/TaskListContext.jsx';

const TaskForm = () => {

    const { tasks, addTask, clearList, editItem, editTask, filterState, setFilterState, filterListHandler } = useContext(TaskListContext);
    const [title, setTitle] = useState('');

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

    useEffect(() => {
        filterListHandler();
        console.log("useffect");
    }, [filterState, tasks])

    const optHandler = (e) => {
        console.log(e.target.value);
        //filterListHandler();
        setFilterState(e.target.value)
    }
    return (
        <>
            <form onSubmit={handleSubmit} className="form">
                <input type="text" value={title} onChange={handleChange} className="task-input" placeholder="Add Task" required />

                <div className="buttons">
                    <button type="submit" className="btn add-task-btn"> {!editItem ? 'Add Task' : 'Edit Task'}</button>
                    <button className="btn clear-btn" onClick={clearList}>Clear</button>
                </div>

                <select className="filter" onChange={optHandler}>
                    <option value="all">All</option>
                    <option value="complete">Complete</option>
                    <option value="incomplete">Incomplete</option>
                </select>

            </form>

        </>
    )
}

export default TaskForm
