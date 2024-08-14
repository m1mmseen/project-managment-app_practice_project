import Input from "./helper/Input.jsx";
import {useRef, useState} from "react";
import Task from "./helper/Task.jsx";

export default function Project({project, onDelete}) {
    const [tasks, setTasks] = useState([]);
    const task = useRef();

    const formattedDate = new Date(project.projectDueDate).toLocaleDateString('de-DE', {year: 'numeric', month: 'short', day: 'numeric'})

    const tasksContent =  <ul className="p-4 mt-8 rounded-md bg-stone-100">
        {tasks.map((task, index) => (
            <li className="flex justify-between my-4" key={index}>
                <p>
                    <p>{task.title}</p>
                    <button>Clear</button>
                </p>
            </li>
        ))}
    </ul>

    const handleNewTask = ({}) => {

    }

    const handleTaskDelete = (id) => {
        tasks.filter((task) => task.taskId === id)
    }

    return <>
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.projectName}</h1>
                    <button className="text-stone-600 hover:text-stone-950" onClick={onDelete}>Delete</button>
                </div>
                <p className="mb-4 text-stone-400">{formattedDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{project.projectDescription}</p>
            </header>
            <div>
                <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
                <div className="w-full flex flex-row justify-between gap-2">
                    <input className="w-2/3 px-2 py-1 rounded-sm bg-stone-100 border-b-2 focus:outline-none focus:border-stone-600" ref={task}/>
                    <button className="w-1/3 text-stone-800 rounded px-4 bg-stone-200 hover:bg-stone-300">Add Task</button>
                </div>
                {tasks.length > 0 ? tasks : <p className="text-stone-800 my-4">This project does not have any tasks yet</p>}
                <Task taskName={"Dummy"}/>
            </div>
        </div>


    </>
}
