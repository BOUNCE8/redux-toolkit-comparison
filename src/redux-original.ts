import { stringify } from "querystring";
import {v1 as uuid } from "uuid";
import { Todo } from "./type";


// CONSTANTS
const CREATE_TODO = 'CREATE_TODO';
const DELETE_TODO = 'DELETE_TODO';
const EDIT_TODO = 'EDIT_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const SELECT_TODO = 'SELECT_TODO';

// ACTION INTERFACE TYPES
interface CreateTodoActionType {
  type: (typeof CREATE_TODO);
  payload: Todo;
};
interface EditTodoActionType {
  type: (typeof EDIT_TODO);
  payload: { id: string, desc: string};
};

interface ToggleTodoActionType {
  type: (typeof TOGGLE_TODO);
  payload: {
    id: string;
    isComplete: boolean;
  };
};
interface DeleteTodoActionType {
  type: (typeof DELETE_TODO);
  payload : {
    id: string;
  };
};
interface SelectTodoActionType {
  type: (typeof SELECT_TODO);
  payload: {
    id: string;
  };
};

// ACTIONS
export const createTodoActionCreator = ({ desc }: {
  desc: string
}): CreateTodoActionType => {
  return {
    type: CREATE_TODO,
    payload: {
      id: uuid(),
      desc: desc,
      isComplete: false,
    }
  };
};

export const EditTodoActionCreation = ({ id, desc } : {
  id: string, desc: string
}): EditTodoActionType => {
  return {
    type: EDIT_TODO,
    payload: { id, desc }
  };
};

export const ToggleTodoActionCreator = ({ id, isComplete } : { id: string, isComplete: boolean }): ToggleTodoActionType => {
  return {
    type: TOGGLE_TODO,
    payload: { id, isComplete }
  };
};

export const DeleteTodoActionCreator = ({ id } : { id: string }) : DeleteTodoActionType => {
  return {
    type: DELETE_TODO,
    payload: { id }
  };
};

export const SelectTodoActionCreator = ({ id } : { id: string }) : SelectTodoActionType => {
  return {
    type: SELECT_TODO,
    payload: { id }
  };
}; 
