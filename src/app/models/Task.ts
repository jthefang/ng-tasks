export interface Task {
  id?:string;
  title:string;
  isComplete:boolean;
  date:Date;
  description?:string;
}