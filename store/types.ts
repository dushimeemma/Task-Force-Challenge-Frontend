export interface TodoState {
  todos: any;
  todo: {};
  message: string;
  error: string;
}

export interface AppState {
  todos: TodoState;
}
