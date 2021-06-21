import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {v1 as uuid } from "uuid";
import { boolean, string } from 'yargs';

import { Todo } from "../type";

const initialTodoState: Todo[] = [
  {
    id: uuid(),
    desc: "Learn React",
    isComplete: true
  },
  {
    id: uuid(),
    desc: "Learn Redux",
    isComplete: true
  },
  {
    id: uuid(),
    desc: "Learn Redux-ToolKit",
    isComplete: false
  }
];

const todosSlice = createSlice({
  name: 'todos',
  initialState: initialTodoState,
  reducers: {
    create: {
      reducer: (state, {payload}: PayloadAction<{id: string; desc: string; isComplete: boolean;}>) => {
        state.push(payload);
      },
      prepare: ({desc}: {desc: string}) => ({
        payload: {
          id: uuid(),
          desc,
          isComplete: false
        }
      })
    },
    edit: (state, {payload}: PayloadAction<{id: string; desc: string}>) => {
      const todoToEdit = state.find(todo => todo.id === payload.id)
      if (todoToEdit) todoToEdit.desc = payload.desc;
      
    },
    toggle: (state, {payload}: PayloadAction<{id: string; isComplete: boolean}>) => {
      const toggledTodo = state.find(todo => todo.id === payload.id);
      if (toggledTodo) toggledTodo.isComplete = toggledTodo.isComplete;
    },
    remove: (state, {payload}: PayloadAction<{id: string;}>) => {
      const removedTodoIndex = state.findIndex(todo => todo.id === payload.id);
      if (removedTodoIndex != -1) {
        return state = state.splice(removedTodoIndex, 1);
      }
    },
    
  }
})