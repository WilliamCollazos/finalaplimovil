import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { Task } from '../tasklist/task';
import { TasksService } from '../service/tasks.service';



@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.page.html',
  styleUrls: ['./tasklist.page.scss'],
})
export class TasklistPage implements OnInit {
  tasks: Array<Task> = [];

  constructor(
    public tasksService: TasksService
  ) {
    this.getTasks();
  }

  getTasks() {
    this.tasksService.getTaskList().snapshotChanges().subscribe(res => {
      this.tasks = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        this.tasks.push(a as Task);
      })
    });
  }

  ngOnInit() {
  }

  addItem() {
    let theNewTask: string | null = prompt("New Task");

    if (theNewTask !== '') {
      this.tasksService.createTask({ title: theNewTask, status: 'open' })?.then(res => {

      });
    }
  }

  markAsDone(slidingItem: IonItemSliding, task: Task) {
    task.status = "done";
    this.tasksService.updateTask(task).then(res => {});
    setTimeout(() => { slidingItem.close(); }, 1);
  }

  removeTask(slidingItem: IonItemSliding, task: Task) {
    this.tasksService.deleteTask(task.id);
  }
}
