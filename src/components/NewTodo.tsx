import {useAppDispatch} from "../hooks/redux";
import {addTask, toggleActive, toggleAll, toggleCompleted} from "../store/todoSlice";
import {FC, useState} from "react";
import style from './Todo.module.css';
import {IFilters} from "../models/IFilters";


type inputText = string
interface NewTodoProps {
    filters: IFilters,
}

export const NewTodo: FC<NewTodoProps> = (filters) => {

    const dispatch = useAppDispatch()
    const [title, setTittle] = useState<inputText>()
    const [body, setBody] = useState<inputText>()

    function handleSubmit() {
        if (title && body) {
            const task = {
                id: 0,
                isActive: false,
                isCompleted: false,
                title: title,
                body: body,
            }
            dispatch(addTask(task))
            setTittle('')
            setBody('')
        }
    }

    return (
        <form className={style.new__todo}>
            <input type="text" placeholder={'Wright a title...'} value={title}
                   onChange={(e) => setTittle(e.currentTarget.value)}/>
            <textarea placeholder={'Wright a description...'}
                      onChange={(e) => setBody(e.currentTarget.value)}></textarea>
            <input type="button" value={'Add task'} onClick={handleSubmit}/>
            <div className={style.filters}>
                Filters:
                <p>All <input className={style.filter}
                              name='filters'
                              checked={!filters.filters.active && !filters.filters.completed}
                              type="radio"
                              onChange={()=>dispatch(toggleAll())}/></p>
                <p>Active <input className={style.filter} name='filters' type="radio" onChange={()=>dispatch(toggleActive())}/></p>
                <p>Completed <input className={style.filter} name='filters' type="radio" onChange={()=>dispatch(toggleCompleted())}/></p>
            </div>
        </form>
    )
}