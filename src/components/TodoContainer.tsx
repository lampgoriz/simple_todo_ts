import {useAppSelector} from "../hooks/redux";
import {TodoItem} from "./TodoItem";
import style from './Todo.module.css';
import {NewTodo} from "./NewTodo";
import {ITodo} from "../models/ITodo";

const TodoContainer = () => {

    const {tasks, filters} = useAppSelector(state => state.todoReducer);
    let newTasks: ITodo[] = [];
    if (filters.active) {
        newTasks = tasks.filter(t => t.isActive === true)
    }

    if (filters.completed) {
        newTasks = tasks.filter(t => t.isCompleted === true)
    }

    if (filters.active && filters.completed) {
        newTasks = tasks.filter(t => t.isActive === true && t.isCompleted === true)
    }

    if(!filters.active && !filters.completed) {
        newTasks = tasks;
    }

    return (
        <div className={style.container}>
            <NewTodo filters={filters}/>
            <ul className={style.task_list}>
                {newTasks && newTasks.map(task =>
                    <TodoItem key={task.id} task={task} filters={filters}/>)}
            </ul>
        </div>
    )
}

export default TodoContainer;

