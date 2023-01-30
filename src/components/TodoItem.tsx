import {FC, useState} from "react";
import {ITodo} from "../models/ITodo";
import style from './TodoItem.module.css';
import {activateTask, completeTask, deactivateTask, deleteTask} from "../store/todoSlice";
import {useAppDispatch} from "../hooks/redux";

interface TodoItemProps {
    task: ITodo,
}


export const TodoItem: FC<TodoItemProps> = ({task}) => {
    const dispatch = useAppDispatch()

    function checkboxOnChangeActive(e: React.ChangeEvent<HTMLInputElement>): void {
        if (task.isActive) dispatch(deactivateTask(task.id));
        if (!task.isActive && !task.isCompleted) dispatch(activateTask(task.id));
    }

    function checkboxOnChangeComleted(e: React.ChangeEvent<HTMLInputElement>): void {
        if (!task.isCompleted) {
            dispatch(completeTask(task.id))
            dispatch(deactivateTask(task.id))
        }
        return
    }

    return (
        <li>
            <p className={style.title}>{task.title}</p>
            <p>{task.body}</p>
            <p>Activity: {<input type="checkbox" checked={task.isActive} onChange={checkboxOnChangeActive}/>}</p>
            <p>Completed: {<input type="checkbox" checked={task.isCompleted} onChange={checkboxOnChangeComleted}/>}</p>
            <button onClick={(e) => dispatch(deleteTask(task.id))}>Delete task</button>
        </li>
    )
}