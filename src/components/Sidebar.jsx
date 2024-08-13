import Button from "./helper/Button.jsx";
import {useState} from "react";

export default function Sidebar({projects, onAddNewProject, onSelect}) {

    return <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your projects</h2>
        <div>
            <Button
                onClick={onAddNewProject}
            >+ Add New Project</Button>
        </div>
        <div>
            <ul className="mt-8">
                {projects.map((project, index) => (
                    <button className="w-full flex justify-between my-4 hover:translate-y-1 duration-300 py-4 px-3 bg-stone-400 text-stone-950 rounded-2xl" key={index} onClick={onSelect}>
                        <strong>{project.projectName}</strong> {project.projectDueDate}
                    </button>
                ))}
            </ul>
        </div>
    </aside>
}
