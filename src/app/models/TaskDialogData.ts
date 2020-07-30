import { Task } from './Task';

export enum TaskDialogAction {
  ADD_TASK,
  UPDATE_TASK
}

export interface TaskDialogData {
  title:string;
  task:Task;
  actionOnSubmit: TaskDialogAction;
  canDelete: boolean;
}