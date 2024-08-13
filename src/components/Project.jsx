import Input from "./helper/Input.jsx";
import {useState} from "react";

export default function Project({project}) {
    const [tasks, setTasks] = useState([]);

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
        <div>
            <div>
                <h2 id="titel"></h2>
                <button>Delete</button>
            </div>
            <div>
                <p id="DueDate"></p>
                <p id="description"></p>
            </div>
        </div>
        <div id="tasks">
            <h3>Tasks</h3>
            <div>
                <input/>
                <button>Add Task</button>
            </div>
            {tasks.length > 0 ? tasks : <p>This project does not have any tasks yet</p>}
        </div>

    </>
}