import React, { useContext } from 'react';
import { TaskListContext } from '../context/TaskListContext.jsx';
import Task from './Task.jsx';

const TaskList = () => {
    const { tasks } = useContext(TaskListContext);

    return (
        <div>
            {tasks.length ? (
                <ul className="list">
                    {tasks.map(task => {
                        return <Task task={task} key={task.id} />
                    })}</ul>)
                : (
                    <div className="no-tasks">No Tasks</div>)}
        </div>
    )
}

export default TaskList
