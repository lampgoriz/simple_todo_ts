import {useAppDispatch} from "../hooks/redux";
import {addTask} from "../store/todoSlice";
import {useState} from "react";

type inputText = string


export const NewTodo = () => {

    const dispatch = useAppDispatch()
    const [title, setTittle] = useState<inputText>()
    const [body, setBody] = useState<inputText>()

    function handleSubmit() {
        if(title && body){
            const task = {
                id: 0,
                isActive: false,
                isCompleted: false,
                title: title,
                body: body,
            }
            dispatch(addTask(task))
        }
    }

    return (
        <form>
            <input type="text" placeholder={'Wright a title...'} value={title} onChange={(e)=>setTittle(e.currentTarget.value)}/>
            <input type="text" placeholder={'Wright a description...'} onChange={(e)=>setBody(e.currentTarget.value)}/>
            <input type="button" value={'Add task'} onClick={handleSubmit}/>
        </form>
    )
}