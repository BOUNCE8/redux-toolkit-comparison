import { createSlice, PayloadAction, configureStore, combineReducers, getDefaultMiddleware} from '@reduxjs/toolkit';
import {v1 as uuid } from "uuid";
import logger from 'redux-logger';

import { Todo } from "./type";

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
      if (toggledTodo) toggledTodo.isComplete = !toggledTodo.isComplete;
    },
    remove: (state, {payload}: PayloadAction<{id: string;}>) => {
      const removedTodoIndex = state.findIndex(todo => todo.id === payload.id);
      if (removedTodoIndex !== -1) {
        return state = state.splice(removedTodoIndex, 1);
      }
    },
  }
});

const selectedTodoSlice = createSlice({
  name: 'selectedTodo',
  initialState: null as string | null,
  reducers: {
    select: (state, {payload}: PayloadAction<{id: string}>) => payload.id    
  }
});

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {},
  extraReducers: {
    [todosSlice.actions.create.type]: state => state + 1,
    [todosSlice.actions.edit.type]: state => state + 1,
    [todosSlice.actions.toggle.type]: state => state + 1,
    [todosSlice.actions.remove.type]: state => state + 1,
  }
});

const reducer = combineReducers({
  todos: todosSlice.reducer,
  selectedTodo: selectedTodoSlice.reducer,
  counter: counterSlice.reducer,
})

export const { 
  create: createTodoActionCreator, 
  edit: editTodoActionCreator, 
  toggle: toggleTodoActionCreator, 
  remove: deleteTodoActionCreator,
} = todosSlice.actions;

export const {
  select: selectTodoActionCreator
} = selectedTodoSlice.actions;

const middleware = [...getDefaultMiddleware(), logger];
export default configureStore({
  reducer,
  middleware 
})