import { Component, OnInit } from '@angular/core';
import {TASKS} from '../../mock-tasks';
import {Task} from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  //Property of our comonent
  tasks: Task[] = TASKS;

  constructor() {}

  ngOnInit(): void {
  }

}