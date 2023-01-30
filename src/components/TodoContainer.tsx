import {useAppSelector} from "../hooks/redux";
import {TodoItem} from "./TodoItem";
import style from './TodoItem.module.css';
import {NewTodo} from "./NewTodo";

const TodoContainer = () => {

    const {tasks} = useAppSelector(state => state.todoReducer);

    return (
        <div className={style.container}>
            <NewTodo />
            <ul className={style.task_list}>
                {tasks && tasks.map(task => <TodoItem key={task.id} task={task}/>)}
            </ul>
        </div>
    )
}

export default TodoContainer;

