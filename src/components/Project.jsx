import Input from "./helper/Input.jsx";
import {useRef, useState} from "react";
import Task from "./helper/Task.jsx";
import Modal from "./helper/Modal.jsx";

export default function Project({project, onDelete}) {
    const [tasks, setTasks] = useState({
        selectedTask: undefined,
        tasks: []
    });
    const task = useRef();
    const dialog = useRef();

    const formattedDate = new Date(project.projectDueDate).toLocaleDateString('de-DE', {year: 'numeric', month: 'short', day: 'numeric'})

    const handleNewTask = () => {
        if(task.current.value.trim() === '') {
            dialog.current.open();
            return;
        }
        const newTask = {
            taskName: task.current.value,
            taskId: Math.random()
        }
        setTasks(prevState => {
            return {
                selectedTask: undefined,
                tasks: [newTask, ...prevState.tasks]
            }
        })
        task.current.value = '';
    }

    const handleTaskDelete = (id) => {

        setTasks((prevState) => {
            return {
                ...prevState,
                tasks: prevState.tasks.filter(
                    (task) => task.taskId !== id
                ),
            };
        });
    }

    let content;

    if (tasks.tasks.length < 0) {
        content = <p>There are now task here yet.</p>
    } else { content =  <ul className="w-full">
        {tasks.tasks.map((task) => {
            return (
                <li className="w-full flex justify-between mt-4 p-4 rounded-md bg-stone-100 shadow-md hover:translate-x-1 duration-300" key={task.taskId}>
                    <p>{task.taskName}</p>
                    <button onClick={() => handleTaskDelete(task.taskId)} className="text-stone-700 hover:text-red-500">Delete</button>
                </li>
            )
        })}
    </ul>
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
                    <input
                        className="w-2/3 px-2 py-1 rounded-sm bg-stone-100 border-b-2 focus:outline-none focus:border-stone-600"
                        ref={task}
                        onKeyDown={(e) => {
                            if(e.key === "Enter") {
                                handleNewTask()
                        }}}/>
                    <button className="w-1/3 text-stone-800 rounded px-4 bg-stone-200 hover:bg-stone-300" onClick={handleNewTask}>Add Task</button>
                </div>
                {content}
            </div>
        </div>
        <Modal ref={dialog} buttonCaption="Close">
            <h2 className="text-xl font-bold text-stone-500 my-4">Invalid input</h2>
            <p className="text-stone-400 mb-4">Please check the inputs</p>
        </Modal>
    </>
}
