import {useRef, useState} from "react";
import Input from "./helper/Input.jsx";
import Button from "./helper/Button.jsx";

export default function NewProject({ onSubmit }) {
    const [newProject, setNewProject] = useState({});

    const handleInputChange = (id, value) => {
        const updatedProject = {...newProject, [id]: value};
        setNewProject(updatedProject);
        onSubmit(updatedProject);
    }

    return <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li><button className="text-stone-700 hover:text-stone-950">Cancel</button></li>
            <li><Button>Save</Button></li>
        </menu>
        <form>
            <Input type="text" label="titel" id="titel" onInputChange={handleInputChange}/>
            <Input isTextarea label="description" id="description" onInputChange={handleInputChange}/>
            <Input type="date" label="due date" id="dueDate" onInputChange={handleInputChange}/>
        </form>
    </div>
}
