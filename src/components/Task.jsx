import React, { useContext } from 'react';
import { TaskListContext } from '../context/TaskListContext.jsx';

const Task = ({ task }) => {
    const { deleteTask, findItem } = useContext(TaskListContext);

    return (
        <li className="list-item">
            <span>{task.title}</span>
            <div>
                <button className="btn-delete task-btn" onClick={(e) => deleteTask(task.id)}><i className="fas fa-trash-alt"></i></button>
                <button className="btn-edit task-btn"  onClick={(e) => findItem(task.id)}><i className="fas fa-pen"></i></button>
            </div>
        </li>
    )
}

export default Task
