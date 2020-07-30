import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from '../models/Task';
import { convertFirestoreTimestampToDate, timestampFromDate, addDaysToDate } from '../util/dates';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasksCollection: AngularFirestoreCollection<Task>;
  tasks: Observable<Task[]>;

  constructor(public afs: AngularFirestore) { 
    this.tasksCollection = this.afs.collection('tasks', ref => ref.orderBy('title', 'asc'));
    this.tasks = this.retrieveTasksWithIds(this.tasksCollection);
  }

  private retrieveTasksWithIds(tasksCollection: AngularFirestoreCollection<Task>): Observable<Task[]> {
    return tasksCollection.snapshotChanges().pipe(
      map(changes => changes.map(a => {
        const data = a.payload.doc.data();
        if (data.date !== null) {
          data.date = convertFirestoreTimestampToDate(data.date);
        }
        data.id = a.payload.doc.id;
        return data;
      }))
    );
  }

  getTasks() {
    return this.tasks;
  }

  async addTask(newTask: Task): Promise<Task> {
    return this.tasksCollection.add(newTask)
      .then(docRef => {
        return docRef.get().then(snapshot => {
          let task = snapshot.data() as Task;
          task.id = docRef.id;
          return task;
        })
      });
  }

  updateTask(task: Task) {
    let taskDoc = this.afs.doc(`tasks/${task.id}`);
    taskDoc.update(task);
  }

  deleteTask(task: Task) {
    let taskDoc = this.afs.doc(`tasks/${task.id}`);
    taskDoc.delete();
  }

  getTasksForDate(date: Date): Observable<Task[]> {
    let start = timestampFromDate(addDaysToDate(-1, date));
    let end = timestampFromDate(date);
    
    let daysTaskCollection: AngularFirestoreCollection<Task> = this.afs.collection('tasks', ref => ref
        .where('date', '>', start)
        .where('date', '<', end)
    );
    return this.retrieveTasksWithIds(daysTaskCollection);
  }

}
