import { useState } from 'react';
import style from './ToDoList.module.css';



function ToDoList() {

    const [tasks, setTasks] = useState(["task1", "task2", "task3"]);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(event) {
        setNewTask(event.target.value);
    };

    function addTask() {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index - 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index - 1]];
            setTasks(updatedTasks);
        }
    };

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    };


    return (
        <div className={style.todoList}>

            <h1>ToDo List</h1>
            <div>
                <input className={style.taskInput}
                    type="text"
                    placeholder='Enter a task...'

                    value={newTask}
                    onChange={handleInputChange}
                />
                <button className={style.addButton} onClick={addTask}>
                    add task
                </button>
            </div>

            <ol>
                {tasks.map((task, index) => (
                    <li key={index} className={style.taskItem}>
                        <span className={style.taskText}>
                            {task}
                        </span>

                        <button className={style.deleteButton} onClick={() => deleteTask(index)}>
                            Delete
                        </button>

                        <button className={style.moveButton} onClick={() => moveTaskUp(index)}>
                            Move Up
                        </button>

                        <button className={style.moveButton} onClick={() => moveTaskDown(index)}>
                            Move Down
                        </button>
                    </li>
                ))}
            </ol>
        </div>
    )
}


export default ToDoList;