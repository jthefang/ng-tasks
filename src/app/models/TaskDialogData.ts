import { Task } from './Task';

export interface TaskDialogData {
  title:string;
  task:Task;
  shouldAddTask: boolean;
}