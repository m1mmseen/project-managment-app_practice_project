import {useRef} from "react";
import Input from "./helper/Input.jsx";
import Button from "./helper/Button.jsx";

export default function NewProject({ onSubmit, onCancel }) {
    const projectNameRef = useRef();
    const projectDescriptionRef = useRef();
    const projectDueDateRef = useRef();

    const handleInputChange = (event) => {

        const newProject = {
            projectName: projectNameRef.current.value,
            projectDescription: projectDescriptionRef.current.value,
            projectDueDate: projectDueDateRef.current.value,
        };
        onSubmit(newProject);
        projectNameRef.current.value = '';
        projectDescriptionRef.current.value = '';
        projectDueDateRef.current.value = '';
    }

    return <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li><button className="text-stone-700 hover:text-stone-950" onClick={onCancel}>Cancel</button></li>
            <li><Button onClick={handleInputChange}>Save</Button></li>
        </menu>
        <form className="mt-4 text-right">
            <Input type="text" label="titel" id="titel" ref={projectNameRef}/>
            <Input isTextarea label="description" id="description" ref={projectDescriptionRef}/>
            <Input type="date" label="due date" id="dueDate" ref={projectDueDateRef}/>
        </form>
    </div>
}
