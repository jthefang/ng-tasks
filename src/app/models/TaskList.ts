import { Task } from './Task';

export interface TaskList {
  listData: Task[];
  listTitle: string;
  listId: string;
  connectedListIds?: string[];
}