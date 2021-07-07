import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../services/task.service';
import {Task} from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  //Property of our comonent
  tasks: Task[] = [];

  //add service as a construtor argument
  constructor(private taskService: TaskService) {}

  //putting it in here because it fires right away
  //Subscribed to Observable service
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=> this.tasks = tasks);
  }

}
