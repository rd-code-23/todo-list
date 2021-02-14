import React, { createContext, useState } from 'react'
import { v4 as uuid } from 'uuid'


export const TaskListContext = createContext();

//coventuib is to append Provider to the component name
const TaskListContextProvider = (props) => {

    const [tasks, setTasks] = useState([
        { title: 'read book', isComplete: false, id: 1 },
        { title: 'wash car', isComplete: false, id: 2 },
    ]);

    const [editItem, setEditItem] = useState(null);

    const addTask = (title) => {
        setTasks([...tasks, { title: title, isComplete: false, id: uuid() }])
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(item => item.id !== id))
    }

    const clearList = () => {
        setTasks([]);
    }

    const findItem = id => {
        const item = tasks.find(task => task.id === id);
        setEditItem(item);
    }

    const editTask = (title, id) => {
        const newTasks = tasks.map(task => (task.id === id ? { title, id } : task))
        setTasks(newTasks)
        setEditItem(null);
    }

    const toggleComplete = (id) => {
        setTasks(
            tasks.map(task => {
                if (task.id === id) {
                    task.isComplete = !task.isComplete
                }
                return task
            })
        )
    }

    return (
        <TaskListContext.Provider
            value={{
                tasks,
                addTask,
                deleteTask,
                clearList,
                findItem,
                editItem,
                editTask,
                toggleComplete
            }}>

            {props.children}
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider