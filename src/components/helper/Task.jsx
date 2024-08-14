export default function Task({taskName, taskId, onDelete}) {
    return <ul className="p-4 mt-8 rounded-md bg-stone-100">
        <li className="flex justify-between my-4">
            {taskName}
            <button onClick={() => onDelete(taskId)} className="text-stone-700 hover:text-red-500">Delete</button>
        </li>
    </ul>

}