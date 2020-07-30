import { Task } from './Task';

export interface TaskListData {
  listData: Task[];
  listTitle: string;
  listId: string;
  connectedListIds?: string[];
}