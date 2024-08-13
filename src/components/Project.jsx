import Input from "./helper/Input.jsx";
import {useState} from "react";

export default function Project({project, onDelete}) {
    const [tasks, setTasks] = useState([]);

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

    const handleNewTask = ({title, index}) => {

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
        </div>
        {/*<div id="tasks">
            <h3>Tasks</h3>
            <div>
                <input/>
                <button>Add Task</button>
            </div>
            {tasks.length > 0 ? tasks : <p>This project does not have any tasks yet</p>}
        </div>*/}

    </>
}
