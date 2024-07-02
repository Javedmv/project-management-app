import { useRef } from 'react';
import Input from "./Input";

function NewProject({onAdd}){
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();

    function handleSave(){
        const enteredTitle = titleRef.current.value;
        const enteredDescriptionRef = descriptionRef.current.value;
        const enteredDueDateRef = dueDateRef.current.value;

        onAdd({title: enteredTitle, discription: enteredDescriptionRef, dueDate:enteredDueDateRef});
    }

    return(
        <div className="w-[35rem] mt-16">
            <menu className="flex item-center justify-end gap-4 my-4">
                <li>
                    <button className="px-6 py-2 text-stone-800 hover:text-stone-950">Cancel</button>
                </li>
                <li>
                    <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleSave}>Save</button>
                </li>
            </menu>
            <div>
                <Input type='text' ref={titleRef} label='Title' />
                <Input ref={descriptionRef} label='Description' textarea/>
                <Input type='date' ref={dueDateRef} label='Due Date' />
            </div>
        </div> 
    )
}

export default NewProject;