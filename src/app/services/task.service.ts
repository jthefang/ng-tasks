import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from '../models/Task';

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
        const data = a.payload.doc.data() as Task;
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

}
