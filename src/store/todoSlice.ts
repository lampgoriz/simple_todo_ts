import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITodo} from "../models/ITodo";

interface TodoState {
   tasks: ITodo[],
}

const initialState: TodoState ={
   tasks: [
      {
         id: 1,
         isActive: true,
         isCompleted: false,
         title: 'First task',
         body: 'Complete task manager',
      },
      {
         id: 2,
         isActive: false,
         isCompleted: true,
         title: 'Second task',
         body: 'Show this completed task',
      },
      {
         id: 3,
         isActive: false,
         isCompleted: false,
         title: 'Last task',
         body: 'Will start soon',
      }
   ],
}


const todoSlice = createSlice({
   name: 'todo',
   initialState,
   reducers: {
      addTask(state, action: PayloadAction<ITodo>) {
         state.tasks.push(action.payload)
         action.payload.id = state.tasks.length
      },
      deleteTask(state, action: PayloadAction<number>){
         state.tasks = state.tasks.filter(task => task.id !== action.payload)
      },
      activateTask(state, action: PayloadAction<number>){
         state.tasks[action.payload - 1].isActive = true
      },
      deactivateTask(state, action: PayloadAction<number>){
         state.tasks[action.payload - 1].isActive = false
      },
      completeTask(state, action: PayloadAction<number>){
         state.tasks[action.payload - 1].isCompleted = true
      }
   }
})

export const {addTask, deleteTask, activateTask, deactivateTask, completeTask} = todoSlice.actions
export default todoSlice.reducer;

