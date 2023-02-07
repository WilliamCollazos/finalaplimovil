import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { Task } from '../tasklist/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  taskListRef?: AngularFireList<Task>;
  taskRef?: AngularFireObject<Task>;

  constructor(public db: AngularFireDatabase) { }

  createTask(apt: Task) {
    var ref = this.taskListRef?.push(apt);
    apt.id = ref?.key;
    ref?.set(apt)
    return ref;
  }

  getTask(id: string) {
    this.taskRef = this.db.object('/tasks/' + id);
    return this.taskRef;
  }

  getTaskList() {
    this.taskListRef = this.db.list('/tasks');
    return this.taskListRef;
  }
  // Update
  updateTask(apt: Task) {
    this.taskRef = this.db.object('/tasks/' + apt.id);
    return this.taskRef?.update(apt);
  }

  deleteTask(id: string|null|undefined) {
    this.taskRef = this.db.object('/tasks/' + id);
    this.taskRef.remove();
  }

}
