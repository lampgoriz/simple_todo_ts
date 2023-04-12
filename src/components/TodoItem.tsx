import {FC} from "react";
import {ITodo} from "../models/ITodo";
import style from './Todo.module.css';
import {activateTask, completeTask, deactivateTask, deleteTask} from "../store/todoSlice";
import {useAppDispatch} from "../hooks/redux";
import {IFilters} from "../models/IFilters";

interface TodoItemProps {
    task: ITodo,
    filters: IFilters,
}


export const TodoItem: FC<TodoItemProps> = ({task, filters}) => {
    const dispatch = useAppDispatch()

    function checkboxOnChangeActive(e: React.ChangeEvent<HTMLInputElement>): void {
        if (task.isActive) dispatch(deactivateTask(task.id));
        if (!task.isActive && !task.isCompleted) dispatch(activateTask(task.id));
    }

    function checkboxOnChangeCompleted(e: React.ChangeEvent<HTMLInputElement>): void {
        if (!task.isCompleted) {
            dispatch(completeTask(task.id))
            dispatch(deactivateTask(task.id))
        }
        return
    }

    return (
        <li className={style.task_item}>
            <p className={style.title}>{task.title}</p>
            <p>{task.body}</p>
            <p>Active: {<input type="checkbox" checked={task.isActive} onChange={checkboxOnChangeActive}/>}</p>
            <p>Completed: {<input type="checkbox" checked={task.isCompleted} onChange={checkboxOnChangeCompleted}/>}</p>
            <button onClick={(e) => dispatch(deleteTask(task.id))}>Delete task</button>
        </li>
    )
}